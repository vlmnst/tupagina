function Card({text, title}:{text:string, title:string}) {
    return (
      <div className="p-5 text-sm m-5 text-center bg-opacity-95 text-gray-900 bg-white rounded-md  lg:w-96 lg:text-base">
            <strong>{title}</strong>
            <br />
            {text}
      </div>
    );
  }
  
  export default Card;
  