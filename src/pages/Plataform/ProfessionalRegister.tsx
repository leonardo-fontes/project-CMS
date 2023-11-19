import FormProfessionalRegister from "../../components/forms/FormProfessionalRegister"

function ProfessionalRegister() {
    return (
        <>
        <div className="col-span-7 flex flex-col gap-11">
            <h2 className="text-3xl font-bold">
            Cadastro de profissional de saúde
            </h2>
            <FormProfessionalRegister />
            
        </div>
        </>
    )
}

export default ProfessionalRegister