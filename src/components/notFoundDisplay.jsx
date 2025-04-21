function NotFoundDisplay() {
    return (
      <div className="text-center w-3xl py-5 px-8 bg-gray-200 rounded-xl">
        <p className="text-xl font-normal text-red-600">
            Nenhum perfil foi encontrado com esse nome de usuário.
            <br/>Tente novamente
        </p>
      </div>
    );
  }
  
  export default NotFoundDisplay;