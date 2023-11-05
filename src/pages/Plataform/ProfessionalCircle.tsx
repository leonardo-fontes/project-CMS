import { Link } from "react-router-dom";
import Icon from "../../components/icons";
import Card from "../../components/layout/Card";

function ProfessionalCircle() {
  return (
    <>
      <div className="col-span-7 flex flex-col pt-4">
        <h3 className="font-bold text-3xl">
          Círculo de profissionais de saúde
        </h3>
        <Card className="flex justify-between items-center mt-6 px-8 py-8">
          <div className="flex gap-4">
            <Icon name="doctorUser" size={28} />{" "}
            <p className="text-base">
              <strong className="font-bold">Luciana Mendonça, </strong>
              Psicologa, CRM 090909
            </p>
          </div>

          <Icon name="options_vertical" size={24} />
        </Card>
        <Card className="flex justify-between items-center mt-6 px-8 py-8">
          <div className="flex gap-4">
            <Icon name="doctorUser" size={28} />{" "}
            <p className="text-base">
              <strong className="font-bold">Hugo, </strong>Psiquiatra, CRM
              090909
            </p>
          </div>

          <Icon name="options_vertical" size={24} />
        </Card>
        <Link className="bg-[#6F3DFF] py-5 text-white mt-16 font-semibold rounded-full text-center" to="/plataform/pro_circle">
            Adicionar Novo
        </Link>
      </div>
    </>
  );
}

export default ProfessionalCircle;
