const data = [
  {
    id: 1,
    name: "Naruto",
    anime: "Naruto",
    img: "./image/naruto.jfif",
    details: {
      id: 1,
      fullname: "Uzumaki Naruto",
      domestic: "Uzumaki",
      speciality: "Phong",
      skill: "Rasengan, Ảnh Phân Thân Chi Thuật, Phong Thuật,...",
      rank: "Hokage VII",
      specical: "Jinchuriki Cửu Vỹ",
      img: "./image/naruto.jfif",
    },
  },
  {
    id: 2,
    name: "Sasuke",
    anime: "Naruto",
    img: "./image/sasuke.jfif",
    details: {
      id: 2,
      fullname: "Uchiha Sasuke",
      domestic: "Uchiha",
      speciality: "Hỏa",
      skill: "Thiên Điểu (Chidori), Hỏa Thuật, Susanoo,...",
      rank: "Genin",
      img: "./image/sasuke.jfif",
      specical:
        "Sở hữu Vạn Hoa Đồng Tả Luân Nhãn (Mangekyo Sharingan) và mắt trái là Luân Hồi Nhãn (Rinnegan)",
    },
  },
  {
    id: 3,
    name: "Itachi",
    anime: "Naruto",
    img: "./image/itachi.jfif",
    details: {
      id: 3,
      fullname: "Uchiha Itachi",
      domestic: "Uchiha",
      speciality: "Hỏa",
      skill: "Ảo Thuật (Tsukuyomi, Izanagi), Ameterasu, Susanoo,...",
      rank: "Jonin",
      img: "./image/itachi.jfif",
      specical:
        "Sở hữu Vạn Hoa Đồng Tả Luân Nhãn (Mangekyo Sharingan) và sử dụng được cấm thuật Izanagi",
    },
  },
  {
    id: 4,
    name: "Kakashi",
    anime: "Naruto",
    img: "./image/kakashi.jfif",
    details: {
      id: 4,
      fullname: "Hatake Kakashi",
      domestic: "Hatake",
      speciality: "Lôi",
      skill:
        "Thiên Điểu (Chidori), Lôi Thiết (Raikiri), Tử Lôi, Thần Uy (Kamui),...",
      rank: "Hokage VI",
      img: "./image/kakashi.jfif",
      specical:
        "Sở hữu Vạn Hoa Đồng Tả Luân Nhãn (Mangekyo Sharingan) mặc dù không phải tộc Uchiha",
    },
  },
  {
    id: 5,
    name: "Tanjiro",
    anime: "Kimetsu no Yaiba",
    img: "./image/tanjiro.jfif",
    details: {
      id: 5,
      fullname: "Kamado Tanjiro",
      domestic: "Kamado",
      speciality: "Nước và Lửa",
      skill: "Hơi Thở Của Nước, Hơi Thở Của Mặt Trời",
      rank: "Ất (Kinoto)",
      img: "./image/tanjiro.jfif",
      specical:
        "Có khả năng sở dụng kết hợp được Hỏa Thần Thần Lạc với Hơi Thở Của Nước",
    },
  },
  {
    id: 6,
    name: "Zenitsu",
    anime: "Kimetsu no Yaiba",
    img: "./image/zenitsu.jfif",
    details: {
      id: 6,
      fullname: "Agatsuma Zenitsu",
      domestic: "Agatsuma",
      speciality: "Sấm Sét",
      skill: "Hơi Thở Của Sấm Sét",
      rank: "Ất (Kinoto)",
      img: "./image/zenitsu.jfif",
      specical:
        "Sáng tạo ra thức thứ 7: Hỏa Lôi Thần của Hơi Thở Sấm Sét, sở hwuc tốc độ thuộc hàng TOP trong Sát Quỷ Đoàn",
    },
  },
  {
    id: 7,
    name: "Inosuke",
    anime: "Kimetsu no Yaiba",
    img: "./image/inosuke.jfif",
    details: {
      id: 7,
      fullname: "Hashibira Inosuke",
      domestic: "Hashibira",
      speciality: "Quái Thú",
      skill: "Hơi Thở Của Quái Thú",
      rank: "Ất (Kinoto)",
      img: "./image/inosuke.jfif",
      specical:
        "Sáng tạo ra Hơi Thở Của Quái Thú và tự mài dũa trong lúc ở vùng núi",
    },
  },
  {
    id: 8,
    name: "Nezuko",
    anime: "Kimetsu no Yaiba",
    img: "./image/nezuko.jpg",
    details: {
      id: 8,
      fullname: "Kamado Nezuko",
      domestic: "Kamado",
      speciality: "Quỷ",
      skill: "Huyết Quỷ Thuật: Bộc Huyết",
      rank: "Được Daki (Thượng Huyền Lục) đánh giá có sức mạnh ngang Thượng Huyền",
      img: "./image/nezuko.jpg",
      specical:
        "Mặc dù là quỷ nhưng không ăn thịt người, ngủ để hồi phục, cùng bộ 3 Tanjiro/ Zenitsu/ Inosuke diệt quỷ",
    },
  },
  {
    id: 9,
    name: "Itadori",
    anime: "Jujutsu Kaisen",
    img: "./image/itadori.jfif",
    details: {
      id: 9,
      fullname: "Yuji Itadori",
      domestic: "Yuji",
      speciality: "Chưa có dự liệu",
      skill: "Black Flash, Divergent Fist, Great Cursed Energy",
      rank: "Chú Thuật Sư Cấp 2",
      img: "./image/itadori.jfif",
      specical:
        "Itadori có một lời thề ràng buộc không tên với Sukuna. Vua Lời Nguyền đã đồng ý hồi sinh cậu bé sau cái chết rõ ràng của cậu trong Phần Quả Bom Bị Nguyền Rủa với hai điều kiện",
    },
  },
  {
    id: 10,
    name: "Megumi",
    anime: "Jujutsu Kaisen",
    img: "./image/megumi.jfif",
    details: {
      id: 10,
      fullname: "Megumi Fushiguro",
      domestic: "Megumi",
      speciality: "Chưa có dữ liệu",
      skill: "Immense Cursed Energy, Ten Shadows Technique, Divine Dogs, ...",
      rank: "Chú Thuật Sư Cấp 2",
      img: "./image/megumi.jfif",
      specical:
        "Mở Rộng Lãnh Địa: Chimera Shadow Garden, Megumi tạo ra một không gian với nhiều bóng đổ. Ở đây, Megumi có thể triệu hồi nhiều thức thần, thâm chí tạo ra chính bản thân mình",
    },
  },
  {
    id: 11,
    name: "Gojo",
    anime: "Jujutsu Kaisen",
    img: "./image/gojo.jfif",
    details: {
      id: 11,
      fullname: "Satoru Gojo",
      domestic: "Gojo",
      speciality: "Chưa có dữ liệu",
      skill: "Immense Cursed Energy, Reverse Cursed Technique, Black Flash",
      rank: "Max của Max, mạnh nhất phim :v",
      img: "./image/gojo.jfif",
      specical:
        "Mở Rộng Lãnh Địa: Limitless, mặc dù là lãnh đĩa mạnh và phức tạp nhất với nhiều cấp độ. Nhưng Gojo đã sử dụng thành thạo nó ở tất cả các cấp độ ~.~",
    },
  },
  {
    id: 12,
    name: "Nobara",
    anime: "Jujutsu Kaisen",
    img: "./image/nobara.jfif",
    details: {
      id: 12,
      fullname: "Nobara Kugisaki",
      domestic: "Nobara",
      speciality: "Chưa có dự liệu",
      skill: "Great Cursed Energy, Black Flash",
      rank: "Chú Thuật Sư Cấp 2",
      img: "./image/nobara.jfif",
      specical:
        "Nobara có nhiều kỹ thuật bảm sinh mãnh mẽ: Straw Doll Technique, Resonance, Hairpin",
    },
  },
];

export default data;
