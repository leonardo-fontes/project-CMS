import FormProfessionalEdit from "../../components/forms/FormProfessionalEdit";

function ProfessionalEdit() {
  return (
    <>
      <div className="col-span-7 flex flex-col gap-11">
        <h2 className="text-3xl font-bold">Editar profissional de saúde</h2>
        <FormProfessionalEdit />
      </div>
    </>
  );
}

export default ProfessionalEdit;
