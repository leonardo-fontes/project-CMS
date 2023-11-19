import Card from "../../components/layout/Card";
import Icon from "../../components/icons";
import { Link } from "react-router-dom";

function ProductPage() {
  return (
    <>
      <div className="col-span-8 font-nunito flex flex-col gap-1">
        <Card className="rounded-t-xl rounded-b-none flex items-center justify-between pl-9 pr-5 py-5">
          <h4 className="font-bold text-2xl ">Produtos e Serviços</h4>
          <Icon className="hover:cursor-pointer" name="more" size={24} />
        </Card>
        <Card className="rounded-t-none flex flex-col items-center text-xl pl-6 pr-4 pb-5 text-white">
            <Icon className="my-10" name="product" size={120}/>
            <p className="text-[#515151] mb-7">Você ainda não cadastrou um produto ou serviço</p>
            <Link className="text-center w-full bg-[#6F3DFF] rounded-full py-5 font-bold" to="/construindo">
                Cadastrar produto ou serviço</Link> 
                
        </Card>
      </div>
    </>
  );
}

export default ProductPage;
