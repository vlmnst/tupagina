function Card({text, title}:{text:string, title:string}) {
    return (
      <div className=" p-5 text-sm m-5 text-center sm:grid sm:content-center text-white bg-gradient-to-tr from-sky-800 to-teal-400 rounded-md  lg:w-96 lg:text-base">
             <strong className="text-lg">{title}</strong>
            <br />
            {text}
      </div>
    );
  }
  
  export default Card;
  