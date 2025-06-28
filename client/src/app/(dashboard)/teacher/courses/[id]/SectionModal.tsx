import { CustomFormField } from "@/components/CustomFormField";
import CustomModal from "@/components/CustomModal";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { SectionFormData, sectionSchema } from "@/lib/schemas";
import { addSection, closeSectionModal, editSection } from "@/state";
import { useAppDispatch, useAppSelector } from "@/state/redux";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import React, { useEffect, useMemo, useCallback } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";

const SectionModal = () => {
  const dispatch = useAppDispatch();
  const { isSectionModalOpen, selectedSectionIndex, sections } = useAppSelector(
    (state) => state.global.courseEditor
  );

  const methods = useForm<SectionFormData>({
    resolver: zodResolver(sectionSchema),
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const section = useMemo(() => {
    return selectedSectionIndex !== null
      ? sections[selectedSectionIndex]
      : null;
  }, [selectedSectionIndex, sections]);

  const resetForm = useCallback((data: any) => methods.reset(data), [methods]);

  useEffect(() => {
    const currentValues = methods.getValues();
    const hasChanges = section
      ? currentValues.title !== section.sectionTitle ||
        currentValues.description !== section.sectionDescription
      : currentValues.title !== "" || currentValues.description !== "";

    if (!hasChanges) return;

    resetForm(
      section
        ? {
            title: section.sectionTitle,
            description: section.sectionDescription,
          }
        : {
            title: "",
            description: "",
          }
    );
  }, [section, resetForm, methods]);

  const onClose = () => {
    dispatch(closeSectionModal());
  };

  const onSubmit = (data: SectionFormData) => {
    const newSection: Section = {
      sectionId: section?.sectionId || uuidv4(),
      sectionTitle: data.title,
      sectionDescription: data.description,
      chapters: section?.chapters || [],
    };

    if (selectedSectionIndex === null) {
      dispatch(addSection(newSection));
    } else {
      dispatch(
        editSection({
          index: selectedSectionIndex,
          section: newSection,
        })
      );
    }

    toast.success(
      `Section added/updated successfully but you need to save the course to apply the changes`
    );
    onClose();
  };

  return (
    <CustomModal isOpen={isSectionModalOpen} onClose={onClose}>
      <div className="section-modal">
        <div className="section-modal__header">
          <h2 className="section-modal__title">Add/Edit Section</h2>
          <button onClick={onClose} className="section-modal__close">
            <X className="w-6 h-6" />
          </button>
        </div>

        <Form {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="section-modal__form"
          >
            <CustomFormField
              name="title"
              label="Section Title"
              placeholder="Write section title here"
            />

            <CustomFormField
              name="description"
              label="Section Description"
              type="textarea"
              placeholder="Write section description here"
            />

            <div className="section-modal__actions">
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit" className="bg-primary-700">
                Save
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </CustomModal>
  );
};

export default SectionModal;
