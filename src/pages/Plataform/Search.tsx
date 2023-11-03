function Search() {
  return (
    <>
      
      <div className="col-span-8">
        <div className="font-nunito flex flex-col gap-4">
          <input
            className="pl-9 py-3 bg-white rounded-full border-[#a5a8aa] border-[1px] outline-none shadow-navbarPlataform"
            type="text"
          />
          <div className="text-[#515151] text-base flex gap-16 pt-8">
            <p className="hover:underline underline-offset-8">Todos os resultados</p>
            <p className="hover:underline underline-offset-8">Pessoas</p>
            <p className="hover:underline underline-offset-8">Empresas</p>
            <p className="hover:underline underline-offset-8">ONGs</p>
            <p className="hover:underline underline-offset-8">Pedidos de ajuda</p>
          </div>
        </div>
      </div>
    
    </>
  );
}

export default Search;
