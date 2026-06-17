import type{HeroNews,SideNews} from '@/types/body.type'

export const heroNews: HeroNews[] = [
  {
    id: 1,
    titleEN: "PM Oli wins vote of confidence — Government to continue",
    titleNE: "प्रधानमन्त्री ओलीले संसदमा विश्वासको मत पाए — सरकार अगाडि बढ्ने",
    descriptionEN:
      "After winning the vote of confidence in the special session of the House of Representatives, the KP Sharma Oli-led government will continue its term.",
    descriptionNE:
      "प्रतिनिधिसभाको विशेष बैठकमा विश्वासको मत पाएपछि केपी शर्मा ओली नेतृत्वको सरकारले आफ्नो कार्यकाल निरन्तर राख्ने भएको छ।",
    image: "/heroimage/heroImage.png",
    createdAtEN: "2 hour ago",
    createdAtNE: "२ घण्टा अघि",
    authorEN: "Narendra Dhakal",
    authorNE: "नरेन्द्र ढकाल",
  },
];

export const sideNews: SideNews[] = [
  {
    id: 1,
    titleNE: "गोरखामा भारी वर्षाको पूर्वानुमान — नदी किनारमा सतर्कता",
    titleEN:
      "Heavy rainfall forecast in Gorkha — alertness advised along riverbanks",
    createdAtEN: "3 hours ago",
    createdAtNE: "३ घण्टा अघि",
    image: "/heroimage/hero1.png",
  },
  {
    id: 2,
    titleNE: "नेपाली राष्ट्रिय टोलीले विश्वकपछनोटमा जित हासिल गर्यो",
    titleEN:
      "The Nepal national team secured a victory in the World Cup qualifiers.",
    createdAtEN: "4 hours ago",
    createdAtNE: "४ घण्टा अघि",
    image: "/heroimage/herob.png",
  },
  {
    id: 3,
    titleNE: "काठमाडौं महानगरले नयाँ फोहोरव्यवस्थापन नीति ल्याउने",
    titleEN:
      "Kathmandu Metropolitan City to introduce a new waste management policy.",
    createdAtEN: "5 hours ago",
    createdAtNE: "५ घण्टा अघि",
    image: "/heroimage/heroc.png",
  },
];