const AllStatistics = () => {
  const allStatistics = [
    {
      id: 1,
      blockStyle: "",
      icon: "flaticon-home",
      timer: "37",
      name: "Propiedades",
    },
    {
      id: 2,
      //blockStyle: "style2",
      blockStyle: "",
      icon: "flaticon-user",
      timer: "24",
      name: "Usuarios",
    },
    {
      id: 3,
      //blockStyle: "style3",
      blockStyle: "",
      icon: "flaticon-chat",
      timer: "12",
      name: "Grupos",
    },
    {
      id: 4,
      //blockStyle: "style4",
      blockStyle: "",
      icon: "flaticon-heart",
      timer: "18",
      name: "Favoritos",
    },
  ];

  return (
    <>
      {allStatistics.map((item) => (
        <div className="col-sm-6 col-md-6 col-lg-6 col-xl-3" key={item.id}>
          <div className={`ff_one ${item.blockStyle}`}>
            <div className="detais">
              <div className="timer">{item.timer}</div>
              <p>{item.name}</p>
            </div>
            <div className="icon">
              <span className={item.icon}></span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default AllStatistics;
