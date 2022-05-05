const Render = ({ info, handleHide }) => {
  return (
    <div>
      {info.map((item) => {
        const {
          fullname,
          domestic,
          id,
          skill,
          rank,
          speciality,
          specical,
          img,
        } = item;
        return (
          <div key={id} className="render">
            <div className="details">
              <button className="btn-close" onClick={() => handleHide(id)}>
                {" "}
                &times;
              </button>
              <div className="information">
                <p>
                  <p className="about">Tên Đầy Đủ</p>: {fullname}
                </p>
                <p>
                  <p className="about">Gia Tộc</p>: {domestic}
                </p>
                <p>
                  <p className="about">Kỹ Năng</p>: {skill}
                </p>
                <p>
                  <p className="about">Cấp Độ</p>: {rank}
                </p>
                <p>
                  <p className="about">Thuộc Tính</p>: {speciality}
                </p>
                <p>
                  <p className="about">Đặc Biệt</p>: {specical}
                </p>
              </div>
              <img src={img} alt={fullname} className="photo details--photo" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Render;
