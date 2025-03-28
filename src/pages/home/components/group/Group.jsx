import React, { useState, useEffect, useRef } from "react";
import SectionHeader from "../../../../components/section-header/SectionHeader";
import group from "../../../../assets/images/group.svg";
import picgroup1 from "../../../../assets/images/picgroup1.jfif";
import picgroup2 from "../../../../assets/images/picgroup2.jfif";
import picgroup3 from "../../../../assets/images/picgroup3.jfif";
import picgroup4 from "../../../../assets/images/picgroup4.jfif";
import Code from "../../../../components/code/Code";
import person from "../../../../assets/icons/person.svg";
import bag from "../../../../assets/icons/bag.svg";
import location from "../../../../assets/icons/location.svg";
import like from "../../../../assets/icons/like.svg";
import "./group.scss";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const teamData = [
  {
    id: 1,
    name: "Shodiyorkhon Abdivoyitov",
    img: picgroup1,
    position: "Director of Improve",
    location: "Toshkent, Chilonzor",
    experience: "6 yillik tajriba",
  },
  {
    id: 2,
    name: "Fakhriyor Begmurodov",
    img: picgroup2,
    position: "Director of Improve Bulungur",
    location: "Samarqand, Jomboy",
    experience: "8 yillik tajriba",
  },
  {
    id: 3,
    name: "Sanjar Narzullayev Botir ogli",
    img: picgroup3,
    position: "Director of Improve Okdaryo",
    location: "Farg‘ona, Marg‘ilon",
    experience: "5 yillik tajriba",
  },
  {
    id: 4,
    name: "Doston Ismoilov Baxtiyor ogli",
    img: picgroup4,
    position: "Manager of Startup Center",
    location: "Namangan, Chortoq",
    experience: "10 yillik tajriba",
  },
];

const Group = () => {
  return (
    <div className="group">
      <div className="container">
        <div className="group__top">
          <SectionHeader
            subtitle={"BIZNING JAMOA"}
            title={
              "Bizning jamoamiz jahon darajasidagi mutaxassislardan iborat"
            }
          />
          <p className="group__top__desc">
            Biz sizni konsultatsiyamiz asosini tashkil etuvchi iqtidorli
            shaxslar bilan tanishtirishdan g'ururlanamiz, ularning har biri
            o'zining noyob mahorati va boy tajribasini o'zgartiruvchi
            natijalarga olib kteamDataadi.
          </p>
        </div>
      </div>

      <div className="group__wrapper">
        <div className="container">
          {teamData.map((el) => (
            <div id={el.id} className="group__content">
              <div className="group__img">
                <img src={el.img} alt={el.name} />
              </div>
              <Code>
                <div className="group__cards">
                  <div className="group__card">
                    <div className="group__icon">
                      <img src={person} alt="person icon" />
                    </div>
                    <h3 className="group__title">{el.name}</h3>
                  </div>
                  <div className="group__card">
                    <div className="group__icon">
                      <img src={bag} alt="bag icon" />
                    </div>
                    <h3 className="group__title">{el.position}</h3>
                  </div>
                  <div className="group__card">
                    <div className="group__icon">
                      <img src={location} alt="location icon" />
                    </div>
                    <h3 className="group__title">{el.location}</h3>
                  </div>
                  <div className="group__card">
                    <div className="group__icon">
                      <img src={like} alt="like icon" />
                    </div>
                    <h3 className="group__title">{el.experience}</h3>
                  </div>
                </div>
                <p className="group__desc">
                  Doimiy rivojlanib borayotgan biznes landshaftida mustahkam va
                  aniq strategiyalar sizning muvaffaqiyat sari yo'l-yo'riq
                  ko'rsatuvchi vositadir. Strategic Business Solutions
                  kompaniyasida biz oddiy rejalardan tashqari biznes
                  strategiyalarini ishlab chiqishga ixtisoslashganmiz. Ular
                  o'sish, innovatsiyalar, yechimlar va bu farovonlik uchun
                  mustahkam rejalardir.
                </p>
              </Code>
            </div>
          ))}
          {/* <div id={teamData[1].id} className="group__content">
                        <div className="group__img">
                            <img src={el.img} alt={teamData[0].name} />
                        </div>
                        <Code>
                            <div className="group__cards">
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img
                                            src={teamData[0].img}
                                            alt="person icon"
                                        />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].name}
                                    </h3>
                                </div>
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img src={bag} alt="bag icon" />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].position}
                                    </h3>
                                </div>
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img
                                            src={location}
                                            alt="location icon"
                                        />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].location}
                                    </h3>
                                </div>
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img src={like} alt="like icon" />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].experience}
                                    </h3>
                                </div>
                            </div>
                            <p className="group__desc">
                                Doimiy rivojlanib borayotgan biznes landshaftida
                                mustahkam va aniq strategiyalar sizning
                                muvaffaqiyat sari yo'l-yo'riq ko'rsatuvchi
                                vositadir. Strategic Business Solutions
                                kompaniyasida biz oddiy rejalardan tashqari
                                biznes strategiyalarini ishlab chiqishga
                                ixtisoslashganmiz. Ular o'sish, innovatsiyalar,
                                yechimlar va bu farovonlik uchun mustahkam
                                rejalardir.
                            </p>
                        </Code>
                    </div>
                    <div id={teamData[2].id} className="group__content">
                        <div className="group__img">
                            <img src={teamData[0].img} alt={teamData[0].name} />
                        </div>
                        <Code>
                            <div className="group__cards">
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img
                                            src={teamData[0].img}
                                            alt="person icon"
                                        />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].name}
                                    </h3>
                                </div>
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img src={bag} alt="bag icon" />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].position}
                                    </h3>
                                </div>
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img
                                            src={location}
                                            alt="location icon"
                                        />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].location}
                                    </h3>
                                </div>
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img src={like} alt="like icon" />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].experience}
                                    </h3>
                                </div>
                            </div>
                            <p className="group__desc">
                                Doimiy rivojlanib borayotgan biznes landshaftida
                                mustahkam va aniq strategiyalar sizning
                                muvaffaqiyat sari yo'l-yo'riq ko'rsatuvchi
                                vositadir. Strategic Business Solutions
                                kompaniyasida biz oddiy rejalardan tashqari
                                biznes strategiyalarini ishlab chiqishga
                                ixtisoslashganmiz. Ular o'sish, innovatsiyalar,
                                yechimlar va bu farovonlik uchun mustahkam
                                rejalardir.
                            </p>
                        </Code>
                    </div>
                    <div id={teamData[3].id} className="group__content">
                        <div className="group__img">
                            <img src={teamData[0].img} alt={teamData[0].name} />
                        </div>
                        <Code>
                            <div className="group__cards">
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img
                                            src={teamData[0].img}
                                            alt="person icon"
                                        />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].name}
                                    </h3>
                                </div>
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img src={bag} alt="bag icon" />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].position}
                                    </h3>
                                </div>
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img
                                            src={location}
                                            alt="location icon"
                                        />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].location}
                                    </h3>
                                </div>
                                <div className="group__card">
                                    <div className="group__icon">
                                        <img src={like} alt="like icon" />
                                    </div>
                                    <h3 className="group__title">
                                        {teamData[0].experience}
                                    </h3>
                                </div>
                            </div>
                            <p className="group__desc">
                                Doimiy rivojlanib borayotgan biznes landshaftida
                                mustahkam va aniq strategiyalar sizning
                                muvaffaqiyat sari yo'l-yo'riq ko'rsatuvchi
                                vositadir. Strategic Business Solutions
                                kompaniyasida biz oddiy rejalardan tashqari
                                biznes strategiyalarini ishlab chiqishga
                                ixtisoslashganmiz. Ular o'sish, innovatsiyalar,
                                yechimlar va bu farovonlik uchun mustahkam
                                rejalardir.
                            </p>
                        </Code>
                    </div> */}
        </div>
      </div>
    </div>
  );
};

export default Group;
