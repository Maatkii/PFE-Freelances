import React, { useState } from "react";
import CondidateCard from "./CondidateCard";
import "./Style.css";
const CondidateList = () => {
  const [condidate, setCondidate] = useState([
    {
      id: Math.random(),
      Name: "Eya Maatki",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_f6456c94.jpeg?region=0%2C0%2C540%2C810",
      rating: 5,
      description:
        "Fraichement diplômée, Riley est désormais une adolescente, ce qui n’est pas sans déclencher un chamboulement majeur au sein du quartier général qui doit faire face à quelque chose d’inattendu : l’arrivée de nouvelles émotions ! Joie, Tristesse, Colère, Peur et Dégoût - qui ont longtemps fonctionné avec succès - ne savent pas trop comment réagir lorsqu’Anxiété débarque. Et il semble qu'elle ne soit pas la seule…",
    },
    {
      Name: "Sinda Quesmi",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_f7648294.jpeg?region=0%2C0%2C540%2C810",
      rating: 3,
      description:
        "Elio, un petit garçon à l'imagination débordante, se retrouve par inadvertance téléporté au Communiverse, une organisation interplanétaire composée de représentants de galaxies très éloignées. Identifié à tort par ces éminences comme l'ambassadeur de la Terre, Elio est tout sauf préparé à une telle pression. Son aventure va le conduire à tisser des liens avec des créatures extraterrestres excentriques, à survivre à une série d'épreuves plus redoutables les unes que les autres mais aussi, d'une manière ou d'une autre, à découvrir qui il est vraiment censé être...",
    },
    {
      Name: "Ghada Dridi",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_4ca3e6b1.jpeg?region=0%2C0%2C540%2C810",
      rating: 4,
      description:
        "Inspiré de l’attraction mythique des parcs Disneyland, LE MANOIR HANTÉ raconte l’histoire d’une mère et son fils qui engagent une équipe de pseudo-experts pour les aider à chasser les différents spectres et fantômes qui hantent leur maison",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
    {
      Name: " Abir Banani",
      posterUrl:
        "https://lumiere-a.akamaihd.net/v1/images/image_7c62dcc9.jpeg?region=0%2C0%2C540%2C810",
      rating: 2,
      description:
        "Asha, jeune fille de 17 ans à l’esprit vif vit à Rosas, un royaume fantastique où tous les souhaits peuvent littéralement s’exaucer. Dans un moment de désespoir, elle adresse un vœu sincère et puissant aux étoiles auquel va répondre une force cosmique : une petite boule d’énergie infinie prénommée Star. Ensemble, Star et Asha vont affronter le plus redoutable des ennemis, le Roi Magnifico et prouver que le souhait d’une personne déterminée, allié à la magie des étoiles, peut réellement produire des miracles...",
    },
  ]);

  return (
    <div className="condidate-list">
      {condidate.map((condidate, index) => {
        return <CondidateCard condidate={condidate} />;
      })}
    </div>
  );
};

export default CondidateList;
