import type { Category } from "@/types/catagory.type";

export const categories: Category[] = [
  {
    slug: "gorkha",
    titleNE: "गोरखा समाचार",
    titleEN: "Gorkha News",
    descriptionNE: "गोरखा जिल्लाका ताजा समाचारहरू",
    descriptionEN: "Latest news from Gorkha district",
    totalNewsEN: "342+",
    totalNewsNE: "३४२+",
    showFeatured: true,
    filters: {
      primary: [
        { value: "all", labelNE: "सबै", labelEN: "All" },
        { value: "politics", labelNE: "राजनीति", labelEN: "Politics" },
        { value: "development", labelNE: "विकास", labelEN: "Development" },
        { value: "agriculture", labelNE: "कृषि", labelEN: "Agriculture" },
        { value: "health", labelNE: "स्वास्थ्य", labelEN: "Health" },
      ],
    },
    news: [
      {
        id: { EN: "01", NE: "०१" },
        slug: "crowds-at-manakamana-temple",
        category: "all",
        titleNE: "मनकामना मन्दिरमा भक्तजनको भीड",
        titleEN: "Crowds at Manakamana Temple",
        image: "/gorkhasamachar/first1.png",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        descriptionNE:
          "गोरखाको मनकामना मन्दिरमा यस वर्ष ठूलो संख्यामा भक्तजन आएका छन्।दशैंको अवसरमा मन्दिर परिसरमा विशेष पूजाआजाको आयोजना गरिएको छ।",
        descriptionEN:
          "A large number of devotees visited Manakamana Temple in Gorkha this year.",
        contentNE:
          "गोरखाको मनकामना मन्दिरमा यस वर्ष ठूलो संख्यामा भक्तजन आएका छन्। दशैंको अवसरमा मन्दिर परिसरमा विशेष पूजाआजाको आयोजना गरिएको छ। स्थानीय प्रशासनले भक्तजनको सुरक्षाका लागि थप सुरक्षाकर्मी खटाएको छ। मन्दिर व्यवस्थापन समितिका अनुसार यस वर्ष गत वर्षको तुलनामा ३० प्रतिशत बढी भक्तजन आएका छन्।",
        contentEN:
          "A large number of devotees visited Manakamana Temple in Gorkha this year. Special worship ceremonies were organized in the temple premises on the occasion of Dashain. Local administration deployed additional security personnel for the safety of devotees. According to the temple management committee, the number of visitors increased by 30 percent compared to last year.",
        createdAtEN: "1 hour ago",
        createdAtNE: "१ घण्टा अघि",
        authorEN: "Suresh Adhikari",
        authorNE: "सुरेश अधिकारी",
        authorInitials: "S.A.",
        authorBioEN: "Senior correspondent of Gorkha Daily.",
        authorBioNE: "गोर्खा दैनिकका वरिष्ठ संवाददाता।",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["Temple", "Dashain", "Gorkha"],
        breadcrumb: { categoryEN: "District", categoryNE: "जिल्ला" },
      },
      {
        id: { EN: "02", NE: "०२" },
        slug: "gorkha-municipality-unveils-new-policy",
        category: "politics",
        titleNE: "गोरखा नगरपालिकाले नयाँ नीति सार्वजनिक गर्‍यो",
        titleEN: "Gorkha Municipality Unveils New Policy",
        image: "/gorkhasamachar/card2.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        descriptionNE:
          "गोरखा नगरपालिकाले स्थानीय विकासलाई प्राथमिकता दिने नयाँ नीति सार्वजनिक गरेको छ।",
        descriptionEN:
          "Gorkha Municipality has announced a new policy prioritizing local development.",
        contentNE:
          "गोरखा नगरपालिकाले स्थानीय विकासलाई प्राथमिकता दिने नयाँ नीति सार्वजनिक गरेको छ। यस नीति अन्तर्गत सडक, खानेपानी र विद्युत् आपूर्तिमा सुधार गर्ने लक्ष्य राखिएको छ। नगरपालिकाका मेयरले यो नीति जनताको जीवनस्तर सुधार गर्न महत्वपूर्ण हुने बताए।",
        contentEN:
          "Gorkha Municipality has announced a new policy prioritizing local development. The policy aims to improve roads, drinking water, and electricity supply. The mayor of the municipality stated that this policy will be important for improving the living standards of the people.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        createdAtEN: "2 hours ago",
        createdAtNE: "२ घण्टा अघि",
        authorEN: "Ram Shrestha",
        authorNE: "राम श्रेष्ठ",
        authorInitials: "R.S.",
        authorBioEN: "Political correspondent of Gorkha Daily.",
        authorBioNE: "गोर्खा दैनिकका राजनीतिक संवाददाता।",
        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",
        tags: ["Politics", "Municipality", "Policy"],
        breadcrumb: { categoryEN: "Politics", categoryNE: "राजनीति" },
      },
      {
        id: { EN: "03", NE: "०३" },
        slug: "road-construction-accelerates-in-gorkha",
        category: "development",
        titleNE: "गोरखामा नयाँ सडक निर्माण कार्य तीव्र",
        titleEN: "Road Construction Accelerates in Gorkha",
        image: "/gorkhasamachar/card3.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        descriptionNE:
          "ग्रामीण क्षेत्र जोड्ने सडक निर्माण कार्य तीव्र गतिमा अघि बढिरहेको छ।",
        descriptionEN:
          "Road construction connecting rural areas is progressing rapidly.",
        contentNE:
          "ग्रामीण क्षेत्र जोड्ने सडक निर्माण कार्य तीव्र गतिमा अघि बढिरहेको छ। सरकारले यस आर्थिक वर्षमा १५ किलोमिटर नयाँ सडक निर्माण गर्ने लक्ष्य राखेको छ। स्थानीय बासिन्दाहरूले सडक निर्माणले उनीहरूको दैनिक जीवनमा सकारात्मक प्रभाव पार्ने बताएका छन्।",
        contentEN:
          "Road construction connecting rural areas is progressing rapidly. The government has set a target of constructing 15 kilometers of new roads this fiscal year. Local residents say the road construction will have a positive impact on their daily lives.",
        createdAtEN: "3 hours ago",
        createdAtNE: "३ घण्टा अघि",
        authorEN: "Bikash Gurung",
        authorNE: "विकास गुरुङ",
        authorInitials: "B.G.",
        authorBioEN: "Development correspondent of Gorkha Daily.",
        authorBioNE: "गोर्खा दैनिकका विकास संवाददाता।",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["Development", "Road", "Infrastructure"],
        breadcrumb: { categoryEN: "Development", categoryNE: "विकास" },
      },
      {
        id: { EN: "04", NE: "०४" },
        slug: "farmers-trained-to-increase-maize-production",
        category: "agriculture",
        titleNE: "मकै उत्पादन बढाउन किसानलाई तालिम",
        titleEN: "Farmers Trained to Increase Maize Production",
        image: "/gorkhasamachar/card4.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        descriptionNE:
          "कृषकहरूलाई आधुनिक कृषि प्रविधिबारे तालिम प्रदान गरिएको छ।",
        descriptionEN:
          "Farmers have been trained on modern agricultural techniques.",
        contentNE:
          "कृषकहरूलाई आधुनिक कृषि प्रविधिबारे तालिम प्रदान गरिएको छ। कृषि विभागले आयोजना गरेको तीन दिने तालिममा ५० जना किसान सहभागी भए। विशेषज्ञहरूले उन्नत बीउ र मलखाद प्रयोगबारे जानकारी दिए।",
        contentEN:
          "Farmers have been trained on modern agricultural techniques. Fifty farmers participated in a three-day training organized by the Agriculture Department. Experts provided information on the use of improved seeds and fertilizers.",
        createdAtEN: "5 hours ago",
        createdAtNE: "५ घण्टा अघि",
        authorEN: "Krishna Adhikari",
        authorNE: "कृष्ण अधिकारी",
        authorInitials: "K.A.",
        authorBioEN: "Agriculture correspondent of Gorkha Daily.",
        authorBioNE: "गोर्खा दैनिकका कृषि संवाददाता।",
        readTimeEN: "4 min read",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        readTimeNE: "४ मिनेट",
        tags: ["Agriculture", "Farming", "Training"],
        breadcrumb: { categoryEN: "Agriculture", categoryNE: "कृषि" },
      },
      {
        id: { EN: "05", NE: "०५" },
        slug: "new-service-launched-at-gorkha-hospital",
        category: "health",
        titleNE: "गोरखा अस्पतालमा नयाँ सेवा सुरु",
        titleEN: "New Service Launched at Gorkha Hospital",
        image: "/gorkhasamachar/card11.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        descriptionNE:
          "गोरखा अस्पतालले विशेषज्ञ स्वास्थ्य सेवा विस्तार गरेको छ।",
        descriptionEN:
          "Gorkha Hospital has expanded its specialist healthcare services.",
        contentNE:
          "गोरखा अस्पतालले विशेषज्ञ स्वास्थ्य सेवा विस्तार गरेको छ। अब अस्पतालमा हृदय र मृगौला रोग विशेषज्ञको सेवा उपलब्ध हुनेछ। अस्पतालका प्रमुखले यो सेवाले दूरदराजका बिरामीलाई काठमाडौं जानु नपर्ने बताए।",
        contentEN:
          "Gorkha Hospital has expanded its specialist healthcare services. Cardiology and nephrology specialist services will now be available at the hospital. The hospital chief said this service will mean patients from remote areas no longer need to travel to Kathmandu.",
        createdAtEN: "6 hours ago",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        createdAtNE: "६ घण्टा अघि",
        authorEN: "Sita Bhandari",
        authorNE: "सीता भण्डारी",
        authorInitials: "S.B.",
        authorBioEN: "Health correspondent of Gorkha Daily.",
        authorBioNE: "गोर्खा दैनिकका स्वास्थ्य संवाददाता।",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["Health", "Hospital", "Healthcare"],
        breadcrumb: { categoryEN: "Health", categoryNE: "स्वास्थ्य" },
      },
      {
        id: { EN: "06", NE: "०६" },
        slug: "drinking-water-project-nears-completion",
        category: "development",
        titleNE: "खानेपानी आयोजनाको निर्माण अन्तिम चरणमा",
        titleEN: "Drinking Water Project Nears Completion",
        image: "/gorkhasamachar/card6.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        descriptionNE:
          "गोरखाको महत्वपूर्ण खानेपानी आयोजना अन्तिम चरणमा पुगेको छ।",
        descriptionEN:
          "A major drinking water project in Gorkha is nearing completion.",
        contentNE:
          "गोरखाको महत्वपूर्ण खानेपानी आयोजना अन्तिम चरणमा पुगेको छ। यो आयोजना पूरा भएपछि १५ हजार परिवारले सफा खानेपानी पाउनेछन्। आयोजनाका इन्जिनियरले अर्को महिनासम्म काम सम्पन्न हुने बताए।",
        contentEN:
          "A major drinking water project in Gorkha is nearing completion. Once completed, 15,000 families will have access to clean drinking water. The project engineer said the work will be completed by next month.",
        createdAtEN: "8 hours ago",
        createdAtNE: "८ घण्टा अघि",
        authorEN: "Prakash Thapa",
        authorNE: "प्रकाश थापा",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        authorInitials: "P.T.",
        authorBioEN: "Infrastructure correspondent of Gorkha Daily.",
        authorBioNE: "गोर्खा दैनिकका पूर्वाधार संवाददाता।",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["Development", "Water", "Infrastructure"],
        breadcrumb: { categoryEN: "Development", categoryNE: "विकास" },
      },
      {
        id: { EN: "07", NE: "" },
        slug: "crowds-at-manakamana-temple-2",
        category: "politics",
        titleNE: "मनकामना मन्दिरमा भक्तजनको भीड",
        titleEN: "Crowds at Manakamana Temple",
        image: "/gorkhasamachar/card1.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        descriptionNE:
          "गोरखाको मनकामना मन्दिरमा यस वर्ष ठूलो संख्यामा भक्तजन आएका छन्।",
        descriptionEN:
          "A large number of devotees visited Manakamana Temple in Gorkha this year.",
        contentNE:
          "गोरखाको मनकामना मन्दिरमा यस वर्ष ठूलो संख्यामा भक्तजन आएका छन्। विशेष पूजाआजाको आयोजना गरिएको छ।",
        contentEN:
          "A large number of devotees visited Manakamana Temple in Gorkha this year. Special worship ceremonies have been organized.",
        createdAtEN: "1 hour ago",
        createdAtNE: "१ घण्टा अघि",
        authorEN: "Suresh Adhikari",
        authorNE: "सुरेश अधिकारी",
        authorInitials: "S.A.",
        authorBioEN: "Senior correspondent of Gorkha Daily.",
        authorBioNE: "गोर्खा दैनिकका वरिष्ठ संवाददाता।",
        readTimeEN: "2 min read",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        readTimeNE: "२ मिनेट",
        tags: ["Temple", "Religion", "Gorkha"],
        breadcrumb: { categoryEN: "District", categoryNE: "जिल्ला" },
      },
      {
        id: { EN: "08", NE: "" },
        slug: "new-development-plan-gorkha-municipality",
        category: "development",
        titleNE: "गोरखा नगरपालिकाको नयाँ विकास योजना",
        titleEN: "New Development Plan by Gorkha Municipality",
        image: "/gorkhasamachar/card2.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        descriptionNE:
          "गोरखा नगरपालिकाले पूर्वाधार विकासका लागि नयाँ योजना सार्वजनिक गरेको छ।",
        descriptionEN:
          "Gorkha municipality has released a new infrastructure development plan.",
        contentNE:
          "गोरखा नगरपालिकाले पूर्वाधार विकासका लागि नयाँ योजना सार्वजनिक गरेको छ। यस योजनाले सडक, पुल र सार्वजनिक भवन निर्माणलाई प्राथमिकता दिनेछ।",
        contentEN:
          "Gorkha municipality has released a new infrastructure development plan. The plan will prioritize construction of roads, bridges, and public buildings.",
        createdAtEN: "2 hours ago",
        createdAtNE: "२ घण्टा अघि",
        authorEN: "Suresh Adhikari",
        authorNE: "सुरेश अधिकारी",
        authorInitials: "S.A.",
        authorBioEN: "Senior correspondent of Gorkha Daily.",
        authorBioNE: "गोर्खा दैनिकका वरिष्ठ संवाददाता।",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["Development", "Municipality", "Infrastructure"],
        breadcrumb: { categoryEN: "Development", categoryNE: "विकास" },
      },
      {
        id: { EN: "09", NE: "09" },
        slug: "farmers-demand-irrigation-solutions",
        category: "agriculture",
        titleNE: "किसानहरूले सिँचाइ समस्या समाधान माग गरे",
        titleEN: "Farmers Demand Irrigation Solutions",
        image: "/gorkhasamachar/card3.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        descriptionNE:
          "गोरखाका किसानहरूले सिँचाइ समस्या समाधान गर्न सरकारसँग माग गरेका छन्।",
        descriptionEN:
          "Farmers in Gorkha are demanding solutions for irrigation problems.",
        contentNE:
          "गोरखाका किसानहरूले सिँचाइ समस्या समाधान गर्न सरकारसँग माग गरेका छन्। किसानहरूले खडेरीका कारण यस वर्ष उत्पादनमा ठूलो कमी आएको बताए। सरकारले छिट्टै सिँचाइ नहर निर्माण गर्ने आश्वासन दिएको छ।",
        contentEN:
          "Farmers in Gorkha are demanding solutions for irrigation problems. Farmers said production has decreased significantly this year due to drought. The government has assured that irrigation canals will be built soon.",
        createdAtEN: "3 hours ago",
        createdAtNE: "३ घण्टा अघि",
        authorEN: "Suresh Adhikari",
        authorNE: "सुरेश अधिकारी",
        authorInitials: "S.A.",
        authorBioEN: "Senior correspondent of Gorkha Daily.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        authorBioNE: "गोर्खा दैनिकका वरिष्ठ संवाददाता।",
        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",
        tags: ["Agriculture", "Irrigation", "Farmers"],
        breadcrumb: { categoryEN: "Agriculture", categoryNE: "कृषि" },
      },
      {
        id: { EN: "10", NE: "10" },
        slug: "heavy-rain-damages-crops",
        category: "agriculture",
        titleNE: "भारी वर्षाले खेतीपातीमा क्षति",
        titleEN: "Heavy Rain Damages Crops",
        image: "/gorkhasamachar/card4.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        descriptionNE:
          "लगातारको वर्षाले गोरखामा खेतीपातीमा ठूलो क्षति पुर्‍याएको छ।",
        descriptionEN:
          "Continuous rainfall has caused major damage to crops in Gorkha district.",
        contentNE:
          "लगातारको वर्षाले गोरखामा खेतीपातीमा ठूलो क्षति पुर्‍याएको छ। प्रभावित किसानहरूले सरकारबाट राहत माग गरेका छन्। जिल्ला प्रशासन कार्यालयले क्षतिको विवरण संकलन गर्न सुरु गरेको छ।",
        contentEN:
          "Continuous rainfall has caused major damage to crops in Gorkha district. Affected farmers have demanded relief from the government. The District Administration Office has started collecting damage details.",
        createdAtEN: "5 hours ago",
        createdAtNE: "५ घण्टा अघि",
        authorEN: "Suresh Adhikari",
        authorNE: "सुरेश अधिकारी",
        authorInitials: "S.A.",
        authorBioEN: "Senior correspondent of Gorkha Daily.",
        authorBioNE: "गोर्खा दैनिकका वरिष्ठ संवाददाता।",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["Agriculture", "Weather", "Disaster"],
        breadcrumb: { categoryEN: "Agriculture", categoryNE: "कृषि" },
      },
      {
        id: { EN: "11", NE: "०६" },
        slug: "new-health-post-to-be-established",
        category: "health",
        titleNE: "नयाँ स्वास्थ्य चौकी स्थापना हुने",
        titleEN: "New Health Post to Be Established",
        image: "/gorkhasamachar/card20.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        descriptionNE: "गोरखामा नयाँ स्वास्थ्य चौकी स्थापना हुने भएको छ।",
        descriptionEN: "A new health post will be established in Gorkha.",
        contentNE:
          "गोरखामा नयाँ स्वास्थ्य चौकी स्थापना हुने भएको छ। यो स्वास्थ्य चौकीले दूरदराजका बासिन्दाहरूलाई प्राथमिक स्वास्थ्य सेवा उपलब्ध गराउनेछ। स्वास्थ्य मन्त्रालयले यसका लागि बजेट विनियोजन गरिसकेको छ।",
        contentEN:
          "A new health post will be established in Gorkha. This health post will provide primary healthcare services to residents of remote areas. The Ministry of Health has already allocated budget for this.",
        createdAtEN: "6 hours ago",
        createdAtNE: "६ घण्टा अघि",
        authorEN: "Suresh Adhikari",
        authorNE: "सुरेश अधिकारी",
        authorInitials: "S.A.",
        authorBioEN: "Senior correspondent of Gorkha Daily.",
        authorBioNE: "गोर्खा दैनिकका वरिष्ठ संवाददाता।",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["Health", "Healthcare", "Rural"],
        breadcrumb: { categoryEN: "Health", categoryNE: "स्वास्थ्य" },
      },
    ],
  },
  {
    slug: "province",
    titleNE: "प्रदेश समाचार",
    titleEN: "Province News",
    descriptionNE: "नेपालका सातै प्रदेशका ताजा समाचारहरू",
    descriptionEN: "Latest news from all seven provinces of Nepal",
    totalNewsEN: "218+",
    totalNewsNE: "२१८+",
    showFeatured: true,

    filters: {
      secondary: [
        { value: "all", labelNE: "सबै", labelEN: "All" },
        { value: "gandaki", labelNE: "गण्डकी", labelEN: "Gandaki" },
        { value: "koshi", labelNE: "कोशी", labelEN: "Koshi" },
        { value: "madhesh", labelNE: "मधेश", labelEN: "Madhesh" },
        { value: "bagmati", labelNE: "बागमती", labelEN: "Bagmati" },
        { value: "lumbini", labelNE: "लुम्बिनी", labelEN: "Lumbini" },
        { value: "karnali", labelNE: "कर्णाली", labelEN: "Karnali" },
        {
          value: "sudurpaschim",
          labelNE: "सुदूरपश्चिम",
          labelEN: "Sudurpaschim",
        },
      ],
      primary: [
        { value: "all", labelNE: "सबै", labelEN: "All" },
        { value: "politics", labelNE: "राजनीति", labelEN: "Politics" },
        { value: "development", labelNE: "विकास", labelEN: "Development" },
        { value: "agriculture", labelNE: "कृषि", labelEN: "Agriculture" },
        { value: "health", labelNE: "स्वास्थ्य", labelEN: "Health" },
        { value: "industry", labelNE: "उद्योग", labelEN: "Industry" },
      ],
    },

    news: [
      {
        id: { EN: "01", NE: "०१" },
        slug: "provincial-government-development-plan",
        region: "gandaki",
        category: "development",
        primaryFilter: "development",
        secondaryFilter: "gandaki",
        titleNE: "प्रदेश सरकारले नयाँ विकास योजना सार्वजनिक गर्‍यो",
        titleEN: "Provincial government announces new development plan",
        descriptionNE:
          "गण्डकी प्रदेश सरकारले पूर्वाधार विस्तारलाई प्राथमिकता दिँदै नयाँ योजना सार्वजनिक गरेको छ।",
        descriptionEN:
          "Gandaki province has announced a new development plan prioritizing infrastructure expansion.",
        contentNE:
          "गण्डकी प्रदेश सरकारले पूर्वाधार विस्तारलाई प्राथमिकता दिँदै विस्तृत विकास योजना सार्वजनिक गरेको छ।",
        contentEN:
          "The Gandaki provincial government has released a detailed development plan focusing on infrastructure expansion.",
        image: "/gorkhasamachar/card12.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        authorInitials: "SA",
        authorBioEN: "Nepal-based journalist covering provincial development.",
        authorBioNE: "प्रदेश विकासमा रिपोर्टिङ गर्ने पत्रकार।",
        createdAtNE: "१ घण्टा अघि",
        createdAtEN: "1 hour ago",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["development", "gandaki", "infrastructure"],
        breadcrumb: {
          categoryEN: "Development",
          categoryNE: "विकास",
        },
      },

      {
        id: { EN: "02", NE: "०२" },
        slug: "bagmati-hospital-equipment-update",
        region: "bagmati",
        category: "health",
        primaryFilter: "health",
        secondaryFilter: "bagmati",
        titleNE: "बागमती प्रदेश अस्पतालमा आधुनिक उपकरण थपियो",
        titleEN: "Modern equipment added to Bagmati provincial hospital",
        descriptionNE:
          "बागमती प्रदेश अस्पतालमा अत्याधुनिक स्वास्थ्य उपकरण थप गरिएको छ।",
        descriptionEN:
          "Advanced medical equipment has been added to Bagmati provincial hospital.",
        contentNE:
          "बागमती प्रदेश अस्पतालमा स्वास्थ्य सेवा सुधार गर्न नयाँ उपकरणहरू थप गरिएको छ।",
        contentEN:
          "New medical equipment has been installed to improve healthcare services in Bagmati province.",
        image: "/gorkhasamachar/card14.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioEN: "Healthcare reporter focusing on public hospitals.",
        authorBioNE: "सार्वजनिक अस्पताल रिपोर्टिङ गर्ने पत्रकार।",
        createdAtNE: "२ घण्टा अघि",
        createdAtEN: "2 hours ago",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        readTimeEN: "2 min read",
        readTimeNE: "२ मिनेट",
        tags: ["health", "hospital", "bagmati"],
        breadcrumb: {
          categoryEN: "Health",
          categoryNE: "स्वास्थ्य",
        },
      },

      {
        id: { EN: "03", NE: "०३" },
        slug: "koshi-agriculture-production-plan",
        region: "koshi",
        category: "agriculture",
        primaryFilter: "agriculture",
        secondaryFilter: "koshi",
        titleNE: "कोशी प्रदेशमा कृषि उत्पादन वृद्धि गर्ने योजना",
        titleEN: "Plan to increase agricultural production in Koshi province",
        descriptionNE:
          "कोशी प्रदेश सरकारले कृषि उत्पादन बढाउने नयाँ कार्यक्रम सुरु गरेको छ।",
        descriptionEN:
          "Koshi province has launched a new program to increase agricultural production.",
        contentNE:
          "कृषि उत्पादन वृद्धि गर्न कोशी प्रदेशले नयाँ रणनीति लागू गरेको छ।",
        contentEN:
          "Koshi province has introduced a new strategy to boost agricultural output.",
        image: "/gorkhasamachar/card13.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioEN: "Agriculture and rural economy journalist.",
        authorBioNE: "कृषि र ग्रामीण अर्थतन्त्र रिपोर्टर।",
        createdAtNE: "३ घण्टा अघि",
        createdAtEN: "3 hours ago",
        readTimeEN: "4 min read",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        readTimeNE: "४ मिनेट",
        tags: ["agriculture", "koshi", "farming"],
        breadcrumb: {
          categoryEN: "Agriculture",
          categoryNE: "कृषि",
        },
      },

      {
        id: { EN: "04", NE: "०४" },
        slug: "madhesh-road-improvement",
        region: "madhesh",
        category: "development",
        primaryFilter: "development",
        secondaryFilter: "madhesh",
        titleNE: "मधेश प्रदेशमा सडक सुधार कार्य तीव्र",
        titleEN: "Road improvement work accelerated in Madhesh province",
        descriptionNE:
          "मधेश प्रदेशमा ग्रामीण सडक सुधारका काम तीव्र गतिमा भइरहेको छ।",
        descriptionEN:
          "Rural road improvement works are progressing rapidly in Madhesh province.",
        contentNE: "ग्रामीण सडक सुधारका लागि ठूलो परियोजना सञ्चालनमा छ।",
        contentEN: "Large-scale rural road development projects are underway.",
        image: "/gorkhasamachar/card16.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        authorInitials: "SA",
        authorBioEN: "Infrastructure and development reporter.",
        authorBioNE: "पूर्वाधार विकास रिपोर्टर।",
        createdAtNE: "४ घण्टा अघि",
        createdAtEN: "4 hours ago",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["roads", "development", "madhesh"],
        breadcrumb: {
          categoryEN: "Development",
          categoryNE: "विकास",
        },
      },

      {
        id: { EN: "05", NE: "०५" },
        slug: "lumbini-tourism-growth",
        region: "lumbini",
        category: "tourism",
        primaryFilter: "all",
        secondaryFilter: "lumbini",
        titleNE: "लुम्बिनीमा पर्यटक आगमनमा वृद्धि",
        titleEN: "Increase in tourist arrivals in Lumbini",
        descriptionNE:
          "लुम्बिनीमा अन्तर्राष्ट्रिय पर्यटकको आगमन उल्लेखनीय रूपमा बढेको छ।",
        descriptionEN:
          "International tourist arrivals in Lumbini have significantly increased.",
        contentNE: "लुम्बिनी धार्मिक पर्यटनको प्रमुख केन्द्र बन्दै गएको छ।",
        contentEN: "Lumbini is becoming a major hub for religious tourism.",
        image: "/gorkhasamachar/card2.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioEN: "Tourism and culture journalist.",
        authorBioNE: "पर्यटन र संस्कृति रिपोर्टर।",
        createdAtNE: "५ घण्टा अघि",
        createdAtEN: "5 hours ago",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["tourism", "lumbini"],
        breadcrumb: {
          categoryEN: "Tourism",
          categoryNE: "पर्यटन",
        },
      },

      {
        id: { EN: "06", NE: "०६" },
        slug: "karnali-irrigation-project",
        region: "karnali",
        category: "agriculture",
        primaryFilter: "agriculture",
        secondaryFilter: "karnali",
        titleNE: "कर्णालीमा सिँचाइ परियोजना विस्तार",
        titleEN: "Irrigation project expansion in Karnali",
        descriptionNE:
          "कर्णाली प्रदेशमा नयाँ सिँचाइ परियोजनाहरू विस्तार गरिएको छ।",
        descriptionEN:
          "New irrigation projects have been expanded in Karnali province.",
        contentNE:
          "सिँचाइ विस्तारले कृषि उत्पादनमा सुधार ल्याउने अपेक्षा गरिएको छ।",
        contentEN:
          "Irrigation expansion is expected to improve agricultural output.",
        image: "/gorkhasamachar/card7.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioEN: "Rural development reporter.",
        authorBioNE: "ग्रामीण विकास रिपोर्टर।",
        createdAtNE: "६ घण्टा अघि",
        createdAtEN: "6 hours ago",
        readTimeEN: "3 min read",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        readTimeNE: "३ मिनेट",
        tags: ["irrigation", "karnali"],
        breadcrumb: {
          categoryEN: "Agriculture",
          categoryNE: "कृषि",
        },
      },

      {
        id: { EN: "07", NE: "०७" },
        slug: "sudurpaschim-industry-investment",
        region: "sudurpaschim",
        category: "industry",
        primaryFilter: "industry",
        secondaryFilter: "sudurpaschim",
        titleNE: "सुदूरपश्चिममा उद्योग विकासमा लगानी वृद्धि",
        titleEN:
          "Increased investment in industrial development in Sudurpaschim",
        descriptionNE:
          "सुदूरपश्चिम प्रदेशमा औद्योगिक विकासका लागि लगानी बढाइएको छ।",
        descriptionEN:
          "Investment has been increased for industrial development in Sudurpaschim province.",
        contentNE: "औद्योगिक क्षेत्र विस्तार गर्ने योजना अघि बढाइएको छ।",
        contentEN: "Plans are underway to expand industrial sectors.",
        image: "/gorkhasamachar/card6.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioEN: "Industry and economy reporter.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        authorBioNE: "उद्योग र अर्थतन्त्र रिपोर्टर।",
        createdAtNE: "७ घण्टा अघि",
        createdAtEN: "7 hours ago",
        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",
        tags: ["industry", "investment"],
        breadcrumb: {
          categoryEN: "Industry",
          categoryNE: "उद्योग",
        },
      },

      {
        id: { EN: "08", NE: "०८" },
        slug: "gandaki-policy-reform",
        region: "gandaki",
        category: "politics",
        primaryFilter: "politics",
        secondaryFilter: "gandaki",
        titleNE: "गण्डकी प्रदेशमा नीति सुधारबारे छलफल",
        titleEN: "Discussion on policy reform in Gandaki province",
        descriptionNE:
          "गण्डकी प्रदेश सरकारले नयाँ नीति सुधारका विषयमा छलफल गरेको छ।",
        descriptionEN:
          "Gandaki province has held discussions on new policy reforms.",
        contentNE: "नीति सुधारका लागि विभिन्न प्रस्तावहरू पेश गरिएको छ।",
        contentEN: "Several proposals have been introduced for policy reform.",
        image: "/gorkhasamachar/card9.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        authorInitials: "SA",
        authorBioEN: "Political analyst and reporter.",
        authorBioNE: "राजनीतिक विश्लेषक रिपोर्टर।",
        createdAtNE: "८ घण्टा अघि",
        createdAtEN: "8 hours ago",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        tags: ["politics", "policy"],
        breadcrumb: {
          categoryEN: "Politics",
          categoryNE: "राजनीति",
        },
      },
    ],
  },
  {
    slug: "national",

    titleNE: "राष्ट्रिय समाचार",
    titleEN: "National News",

    descriptionNE: "नेपालभरका ताजा राष्ट्रिय समाचारहरू",
    descriptionEN: "Latest national news across Nepal",

    totalNewsEN: "567+",
    totalNewsNE: "५६७+",

    showFeatured: true,

    filters: {
      primary: [
        { value: "all", labelNE: "सबै", labelEN: "All" },
        { value: "politics", labelNE: "राजनीति", labelEN: "Politics" },
        { value: "development", labelNE: "विकास", labelEN: "Development" },
        { value: "health", labelNE: "स्वास्थ्य", labelEN: "Health" },
        { value: "education", labelNE: "शिक्षा", labelEN: "Education" },
        { value: "economy", labelNE: "अर्थतन्त्र", labelEN: "Economy" },
      ],
    },

    news: [
      {
        id: { EN: "01", NE: "०१" },
        slug: "government-new-policy-announcement",
        category: "politics",
        primaryFilter: "politics",

        titleNE: "सरकारले नयाँ नीति सार्वजनिक गर्‍यो",
        titleEN: "Government announces new policy",

        descriptionNE:
          "सरकारले आर्थिक सुधारका लागि नयाँ नीति ल्याएको छ। यसले कर प्रणाली, लगानी वातावरण र सार्वजनिक खर्च व्यवस्थापनमा सुधार ल्याउने अपेक्षा गरिएको छ।",
        descriptionEN:
          "The government has introduced a new policy for economic reform, aiming to improve taxation, investment climate, and public spending efficiency.",

        contentNE:
          "सरकारले हालै सार्वजनिक गरेको नयाँ नीतिले देशको आर्थिक संरचनामा दीर्घकालीन सुधार ल्याउने लक्ष्य राखेको छ। यस नीतिअन्तर्गत कर प्रणालीलाई सरल बनाउने, लगानीकर्ताका लागि सहज वातावरण निर्माण गर्ने र सार्वजनिक खर्चलाई पारदर्शी बनाउने योजना समावेश गरिएको छ।",
        contentEN:
          "The newly announced government policy aims at long-term economic restructuring. It focuses on simplifying the tax system, improving the investment environment, and making public spending more transparent and efficient.",

        image: "/gorkhasamachar/card8.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "१ घण्टा अघि",
        createdAtEN: "1 hour ago",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE:
          "राष्ट्रिय राजनीति र अर्थतन्त्रमा रिपोर्टिङ गर्ने पत्रकार।",
        authorBioEN:
          "Journalist covering national politics and economic affairs.",

        tags: ["politics", "policy", "economy"],

        breadcrumb: {
          categoryNE: "राजनीति",
          categoryEN: "Politics",
        },
      },

      {
        id: { EN: "02", NE: "०२" },
        slug: "infrastructure-development-nepal",
        category: "development",
        primaryFilter: "development",

        titleNE: "देशभर पूर्वाधार विकास तीव्र",
        titleEN: "Infrastructure development accelerating nationwide",

        descriptionNE:
          "नेपालभर पूर्वाधार विकासका काम तीव्र गतिमा भइरहेको छ। यसले राष्ट्रिय अर्थतन्त्रमा सकारात्मक प्रभाव पार्ने अपेक्षा गरिएको छ।",
        descriptionEN:
          "Infrastructure development projects are accelerating across Nepal, expected to positively impact the national economy.",

        contentNE:
          "देशभर सडक, पुल, ऊर्जा र सञ्चार पूर्वाधारका परियोजनाहरू तीव्र गतिमा अघि बढिरहेका छन्। सरकार र निजी क्षेत्रको संयुक्त लगानीले विकास कार्यलाई अझ प्रभावकारी बनाएको छ।",
        contentEN:
          "Across Nepal, infrastructure projects including roads, bridges, energy, and communication are progressing rapidly with joint government and private investment.",

        image: "/gorkhasamachar/card19.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "२ घण्टा अघि",
        createdAtEN: "2 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "पूर्वाधार विकास रिपोर्टिङ गर्ने पत्रकार।",
        authorBioEN: "Infrastructure development journalist.",

        tags: ["development", "infrastructure", "nationwide"],

        breadcrumb: {
          categoryNE: "विकास",
          categoryEN: "Development",
        },
      },

      {
        id: { EN: "03", NE: "०३" },
        slug: "health-ministry-campaign-nepal",
        category: "health",
        primaryFilter: "health",

        titleNE: "स्वास्थ्य मन्त्रालयको नयाँ अभियान सुरु",
        titleEN: "Health ministry launches new campaign",

        descriptionNE:
          "देशव्यापी स्वास्थ्य सुधारका लागि नयाँ अभियान सुरु गरिएको छ। यस अभियानले प्राथमिक स्वास्थ्य सेवामा सुधार ल्याउने लक्ष्य राखेको छ।",
        descriptionEN:
          "A nationwide health improvement campaign has been launched to strengthen primary healthcare services.",

        contentNE:
          "स्वास्थ्य मन्त्रालयले देशभरका अस्पताल र स्वास्थ्य केन्द्रहरूमा सुधार ल्याउन नयाँ अभियान सुरु गरेको छ। यसले औषधि पहुँच, सेवा गुणस्तर र जनचेतना कार्यक्रमलाई प्राथमिकता दिएको छ।",
        contentEN:
          "The health ministry has launched a nationwide campaign focusing on improving hospitals, healthcare access, and public awareness programs.",

        image: "/gorkhasamachar/card11.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        createdAtNE: "३ घण्टा अघि",
        createdAtEN: "3 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "स्वास्थ्य तथा सामाजिक मुद्दामा रिपोर्टिङ गर्ने पत्रकार।",
        authorBioEN: "Journalist covering health and social issues.",

        tags: ["health", "government", "campaign"],

        breadcrumb: {
          categoryNE: "स्वास्थ्य",
          categoryEN: "Health",
        },
      },

      {
        id: { EN: "04", NE: "०४" },
        slug: "education-reform-nepal",
        category: "education",
        primaryFilter: "education",

        titleNE: "शिक्षा क्षेत्रमा नयाँ सुधार योजना",
        titleEN: "New reform plan in education sector",

        descriptionNE:
          "शिक्षा प्रणाली सुधारका लागि नयाँ योजना अघि सारिएको छ। यसले डिजिटल शिक्षालाई विस्तार गर्ने लक्ष्य राखेको छ।",
        descriptionEN:
          "A new reform plan has been introduced to expand and modernize the education system.",

        contentNE:
          "सरकारले शिक्षा क्षेत्रमा डिजिटल कक्षा, शिक्षक तालिम र पाठ्यक्रम सुधारलाई प्राथमिकता दिँदै नयाँ योजना लागू गरेको छ।",
        contentEN:
          "The government has launched reforms focusing on digital classrooms, teacher training, and curriculum modernization.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        image: "/gorkhasamachar/card1.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "४ घण्टा अघि",
        createdAtEN: "4 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "शिक्षा र सामाजिक विकास रिपोर्टर।",
        authorBioEN: "Education and social development reporter.",

        tags: ["education", "reform", "digital"],

        breadcrumb: {
          categoryNE: "शिक्षा",
          categoryEN: "Education",
        },
      },

      {
        id: { EN: "05", NE: "०५" },
        slug: "economic-growth-nepal",
        category: "economy",
        primaryFilter: "economy",

        titleNE: "अर्थतन्त्रमा सुधार संकेत देखियो",
        titleEN: "Signs of economic improvement observed",

        descriptionNE:
          "नेपालको अर्थतन्त्रमा सकारात्मक सुधार देखिन थालेको छ। लगानी र व्यापार क्षेत्रमा वृद्धि देखिएको छ।",
        descriptionEN:
          "Positive economic improvement signs are visible in Nepal with growth in investment and trade.",

        contentNE:
          "हालैका आर्थिक सूचकहरूले नेपालमा आर्थिक गतिविधि सुधार हुँदै गएको देखाएका छन्। निर्यात, रेमिट्यान्स र लगानी क्षेत्रमा वृद्धि देखिएको छ।",
        contentEN:
          "Recent indicators show improvement in Nepal’s economy with growth in exports, remittances, and investment.",

        image: "/gorkhasamachar/card10",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        createdAtNE: "५ घण्टा अघि",
        createdAtEN: "5 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "अर्थतन्त्र विश्लेषण र रिपोर्टिङ गर्ने पत्रकार।",
        authorBioEN: "Economy analyst and reporter.",

        tags: ["economy", "growth", "trade"],

        breadcrumb: {
          categoryNE: "अर्थतन्त्र",
          categoryEN: "Economy",
        },
      },

      {
        id: { EN: "06", NE: "०६" },
        slug: "parliament-budget-discussion",
        category: "politics",
        primaryFilter: "politics",

        titleNE: "संसदमा बजेटमाथि छलफल जारी",
        titleEN: "Budget discussion ongoing in parliament",

        descriptionNE:
          "आगामी आर्थिक वर्षको बजेटमाथि संसदमा विस्तृत छलफल जारी छ। विभिन्न दलहरूले आफ्ना धारणा प्रस्तुत गरिरहेका छन्।",
        descriptionEN:
          "Detailed budget discussions for the upcoming fiscal year are ongoing in parliament.",

        contentNE:
          "संसदमा बजेटमाथि विस्तृत छलफल भइरहेको छ जसमा विकास, स्वास्थ्य र शिक्षा क्षेत्रका प्राथमिकता निर्धारण गरिँदैछ।",
        contentEN:
          "Parliament is actively discussing the national budget, focusing on development, health, and education priorities.",

        image: "/heroimage/heroImage.png",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "६ घण्टा अघि",
        createdAtEN: "6 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "राजनीतिक रिपोर्टिङ गर्ने पत्रकार।",
        authorBioEN: "Political reporter.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        tags: ["politics", "parliament", "budget"],

        breadcrumb: {
          categoryNE: "राजनीति",
          categoryEN: "Politics",
        },
      },

      {
        id: { EN: "07", NE: "०७" },
        slug: "road-project-expansion-nepal",
        category: "development",
        primaryFilter: "development",

        titleNE: "सडक निर्माण परियोजना विस्तार",
        titleEN: "Road construction projects expanded",

        descriptionNE:
          "देशभर नयाँ सडक निर्माण परियोजनाहरू विस्तार गरिएको छ जसले यातायात सुधार गर्नेछ।",
        descriptionEN:
          "New road construction projects have been expanded nationwide to improve transportation.",

        contentNE:
          "देशभर सडक सञ्जाल विस्तार गर्न ठूला परियोजनाहरू सञ्चालन भइरहेका छन् जसले ग्रामीण र शहरी क्षेत्रलाई जोड्नेछ।",
        contentEN:
          "Large-scale road expansion projects are connecting rural and urban areas across Nepal.",

        image: "/heroimage/heroc.png",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "७ घण्टा अघि",
        createdAtEN: "7 hours ago",

        readTimeEN: "4 min read",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "पूर्वाधार विकास रिपोर्टर।",
        authorBioEN: "Infrastructure reporter.",

        tags: ["roads", "development"],

        breadcrumb: {
          categoryNE: "विकास",
          categoryEN: "Development",
        },
      },

      {
        id: { EN: "08", NE: "०८" },
        slug: "healthcare-improvements-nepal",
        category: "health",
        primaryFilter: "health",

        titleNE: "स्वास्थ्य सेवामा सुधार घोषणा",
        titleEN: "Improvements announced in healthcare services",

        descriptionNE:
          "सरकारले स्वास्थ्य सेवामा सुधारका लागि नयाँ योजना घोषणा गरेको छ।",
        descriptionEN:
          "The government has announced improvements in healthcare services across the country.",

        contentNE:
          "स्वास्थ्य सेवामा गुणस्तर सुधार गर्न अस्पताल पूर्वाधार, उपकरण र जनशक्ति विस्तार गर्ने योजना अघि बढाइएको छ।",
        contentEN:
          "Plans are underway to improve healthcare infrastructure, equipment, and workforce across Nepal.",

        image: "/heroimage/hero1.png",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "८ घण्टा अघि",
        createdAtEN: "8 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "स्वास्थ्य रिपोर्टर।",
        authorBioEN: "Healthcare reporter.",

        tags: ["health", "policy"],

        breadcrumb: {
          categoryNE: "स्वास्थ्य",
          categoryEN: "Health",
        },
      },

      {
        id: { EN: "09", NE: "०९" },
        slug: "digital-classrooms-nepal",
        category: "education",
        primaryFilter: "education",

        titleNE: "सामुदायिक विद्यालयमा डिजिटल कक्षा सञ्चालन",
        titleEN: "Digital classrooms launched in community schools",

        descriptionNE:
          "देशका विभिन्न सामुदायिक विद्यालयमा डिजिटल कक्षा सञ्चालनमा ल्याइएको छ जसले आधुनिक शिक्षामा सहयोग पुर्‍याउनेछ।",
        descriptionEN:
          "Digital classrooms have been introduced in community schools across Nepal to enhance modern learning.",

        contentNE:
          "डिजिटल शिक्षाले ग्रामीण क्षेत्रमा शिक्षा पहुँच सुधार गर्न महत्वपूर्ण भूमिका खेल्ने अपेक्षा गरिएको छ।",
        contentEN:
          "Digital education is expected to significantly improve access to quality learning in rural areas.",

        image: "/heroimage/herob.png",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "९ घण्टा अघि",
        createdAtEN: "9 hours ago",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "शिक्षा रिपोर्टर।",
        authorBioEN: "Education reporter.",

        tags: ["education", "digital"],

        breadcrumb: {
          categoryNE: "शिक्षा",
          categoryEN: "Education",
        },
      },

      {
        id: { EN: "10", NE: "१०" },
        slug: "export-growth-nepal",
        category: "economy",
        primaryFilter: "economy",

        titleNE: "निर्यात व्यापारमा उल्लेखनीय वृद्धि",
        titleEN: "Significant growth recorded in exports",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        descriptionNE:
          "चालु आर्थिक वर्षमा नेपालको निर्यात व्यापारमा उल्लेखनीय वृद्धि भएको छ जसले विदेशी मुद्रा सञ्चितिमा सुधार ल्याएको छ।",
        descriptionEN:
          "Nepal has recorded significant growth in exports during the current fiscal year, improving foreign currency reserves.",

        contentNE:
          "निर्यात व्यापारमा भएको वृद्धि कृषि उत्पादन, हस्तकला र औद्योगिक वस्तुहरूको माग बढेसँगै सम्भव भएको हो।",
        contentEN:
          "Export growth has been driven by increased demand for agricultural products, handicrafts, and industrial goods.",

        image: "/gorkhasamachar/card1.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "१० घण्टा अघि",
        createdAtEN: "10 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "अर्थतन्त्र रिपोर्टर।",
        authorBioEN: "Economy reporter.",

        tags: ["economy", "exports"],

        breadcrumb: {
          categoryNE: "अर्थतन्त्र",
          categoryEN: "Economy",
        },
      },
    ],
  },
  {
    slug: "international",

    titleNE: "अन्तर्राष्ट्रिय",
    titleEN: "International",

    descriptionNE: "विश्वका ताजा अन्तर्राष्ट्रिय समाचारहरू",
    descriptionEN: "Latest international news from around the world",

    totalNewsEN: "431+",
    totalNewsNE: "४३१+",

    showFeatured: true,

    filters: {
      primary: [
        { value: "all", labelNE: "सबै", labelEN: "All" },
        { value: "politics", labelNE: "राजनीति", labelEN: "Politics" },
        { value: "economy", labelNE: "अर्थतन्त्र", labelEN: "Economy" },
        { value: "technology", labelNE: "प्रविधि", labelEN: "Technology" },
        { value: "conflict", labelNE: "संघर्ष", labelEN: "Conflict" },
        { value: "diplomacy", labelNE: "कूटनीति", labelEN: "Diplomacy" },
      ],
    },

    news: [
      {
        id: { EN: "01", NE: "०१" },
        slug: "global-oil-price-drop",
        category: "economy",
        primaryFilter: "economy",
        secondaryFilter: "all",

        titleNE: "विश्व बजारमा तेलको मूल्य घट्यो",
        titleEN: "Oil prices fall in global market",

        descriptionNE:
          "अन्तर्राष्ट्रिय बजारमा कच्चा तेलको मूल्य घटेको छ। यसले ऊर्जा बजारमा नयाँ समायोजनको संकेत दिएको छ।",
        descriptionEN:
          "Crude oil prices have dropped in the global market, signaling adjustments in the global energy sector.",

        contentNE:
          "विश्व ऊर्जा बजारमा आपूर्ति र मागको सन्तुलन परिवर्तन हुँदा कच्चा तेलको मूल्यमा गिरावट आएको छ। यसले आयातकर्ता देशहरूलाई केही राहत दिने अपेक्षा गरिएको छ।",
        contentEN:
          "The drop in crude oil prices is driven by shifts in global supply and demand, offering relief to oil-importing nations.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        image: "/gorkhasamachar/card13.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "१ घण्टा अघि",
        createdAtEN: "1 hour ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "अन्तर्राष्ट्रिय अर्थतन्त्र विश्लेषक रिपोर्टर।",
        authorBioEN: "International economy analyst and journalist.",

        tags: ["economy", "oil", "global market"],

        breadcrumb: {
          categoryNE: "अर्थतन्त्र",
          categoryEN: "Economy",
        },
      },

      {
        id: { EN: "02", NE: "०२" },
        slug: "ai-technological-breakthrough",
        category: "technology",
        primaryFilter: "technology",
        secondaryFilter: "all",

        titleNE: "एआई प्रविधिमा ठूलो प्रगति",
        titleEN: "Major breakthrough in AI technology",

        descriptionNE:
          "कृत्रिम बुद्धिमत्ता क्षेत्रमा नयाँ उपलब्धि हासिल भएको छ जसले प्रविधि उद्योगमा ठूलो परिवर्तन ल्याउने अपेक्षा गरिएको छ।",
        descriptionEN:
          "A major breakthrough in artificial intelligence is expected to transform the global tech industry.",

        contentNE:
          "एआई प्रविधिको नयाँ संस्करणले डेटा प्रोसेसिङ, भाषा बुझाइ र निर्णय क्षमतामा ठूलो सुधार ल्याएको छ। यसले विभिन्न उद्योगहरूमा स्वचालनलाई अझ प्रभावकारी बनाउनेछ।",
        contentEN:
          "The latest AI advancements improve data processing, language understanding, and decision-making across industries.",

        image: "/gorkhasamachar/card18.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        createdAtNE: "२ घण्टा अघि",
        createdAtEN: "2 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "प्रविधि र नवप्रवर्तन रिपोर्टर।",
        authorBioEN: "Technology and innovation journalist.",

        tags: ["AI", "technology", "innovation"],

        breadcrumb: {
          categoryNE: "प्रविधि",
          categoryEN: "Technology",
        },
      },

      {
        id: { EN: "03", NE: "०३" },
        slug: "us-china-diplomatic-talks",
        category: "politics",
        primaryFilter: "politics",
        secondaryFilter: "all",

        titleNE: "अमेरिका–चीन सम्बन्धमा नयाँ छलफल",
        titleEN: "New talks on US–China relations",

        descriptionNE:
          "अमेरिका र चीनबीच कूटनीतिक सम्बन्ध सुधारबारे उच्चस्तरीय छलफल भएको छ।",
        descriptionEN:
          "High-level diplomatic discussions have been held between the US and China.",

        contentNE:
          "दुई महाशक्तिबीच व्यापार, सुरक्षा र प्रविधि सहयोगका विषयमा विस्तृत छलफल भएको छ जसले वैश्विक राजनीति प्रभावित गर्न सक्छ।",
        contentEN:
          "The US and China discussed trade, security, and technology cooperation, potentially impacting global politics.",

        image: "/gorkhasamachar/card7.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "३ घण्टा अघि",
        createdAtEN: "3 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "अन्तर्राष्ट्रिय राजनीति विश्लेषक।",
        authorBioEN: "International politics analyst.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        tags: ["politics", "US", "China", "diplomacy"],

        breadcrumb: {
          categoryNE: "राजनीति",
          categoryEN: "Politics",
        },
      },

      {
        id: { EN: "04", NE: "०४" },
        slug: "middle-east-conflict-tension",
        category: "conflict",
        primaryFilter: "conflict",
        secondaryFilter: "all",

        titleNE: "मध्यपूर्वमा तनाव बढ्दै",
        titleEN: "Rising tensions in the Middle East",

        descriptionNE:
          "मध्यपूर्व क्षेत्रमा राजनीतिक र सैन्य तनाव बढ्दै गएको छ जसले विश्व समुदायलाई चिन्तित बनाएको छ।",
        descriptionEN:
          "Rising political and military tensions in the Middle East are raising global concerns.",

        contentNE:
          "क्षेत्रीय द्वन्द्वका कारण मानवीय संकट गहिरिँदै गएको छ र अन्तर्राष्ट्रिय हस्तक्षेपको माग बढिरहेको छ।",
        contentEN:
          "The regional conflict is deepening humanitarian crises, prompting calls for international intervention.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        image: "/gorkhasamachar/card11.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        createdAtNE: "४ घण्टा अघि",
        createdAtEN: "4 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "संघर्ष र सुरक्षा रिपोर्टर।",
        authorBioEN: "Conflict and security journalist.",

        tags: ["conflict", "middle east", "security"],

        breadcrumb: {
          categoryNE: "संघर्ष",
          categoryEN: "Conflict",
        },
      },

      {
        id: { EN: "05", NE: "०५" },
        slug: "europe-diplomatic-agreement",
        category: "diplomacy",
        primaryFilter: "diplomacy",
        secondaryFilter: "all",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        titleNE: "युरोपमा नयाँ कूटनीतिक सम्झौता",
        titleEN: "New diplomatic agreement in Europe",

        descriptionNE:
          "युरोपेली देशहरूबीच व्यापार र सुरक्षा सहयोगबारे नयाँ कूटनीतिक सम्झौता भएको छ।",
        descriptionEN:
          "A new diplomatic agreement has been signed between European nations on trade and security cooperation.",

        contentNE:
          "युरोपेली संघका सदस्य राष्ट्रहरूले आर्थिक स्थिरता र सुरक्षा सहयोग बढाउने उद्देश्यले नयाँ सम्झौता गरेका छन्।",
        contentEN:
          "EU member states signed a new agreement to strengthen economic stability and security cooperation.",

        image: "/gorkhasamachar/card18.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        createdAtNE: "५ घण्टा अघि",
        createdAtEN: "5 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "कूटनीति रिपोर्टर।",
        authorBioEN: "Diplomacy reporter.",

        tags: ["diplomacy", "europe", "agreement"],

        breadcrumb: {
          categoryNE: "कूटनीति",
          categoryEN: "Diplomacy",
        },
      },

      {
        id: { EN: "06", NE: "०६" },
        slug: "global-startup-growth",
        category: "technology",
        primaryFilter: "technology",
        secondaryFilter: "all",

        titleNE: "स्टार्टअप क्षेत्रमा विश्वव्यापी वृद्धि",
        titleEN: "Global growth in startup ecosystem",

        descriptionNE:
          "स्टार्टअप कम्पनीहरूको संख्या विश्वभर बढ्दै गएको छ जसले नवप्रवर्तनलाई तीव्र बनाएको छ।",
        descriptionEN:
          "Startup ecosystems are rapidly expanding worldwide, driving innovation.",

        contentNE:
          "विश्वका विभिन्न देशमा स्टार्टअप कम्पनीहरू द्रुत गतिमा वृद्धि भइरहेका छन् जसले रोजगारी र प्रविधि विकासलाई बढावा दिएको छ।",
        contentEN:
          "Startup growth globally is boosting job creation and technological innovation.",

        image: "/gorkhasamachar/card4.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "६ घण्टा अघि",
        createdAtEN: "6 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "स्टार्टअप र प्रविधि रिपोर्टर।",
        authorBioEN: "Startup and technology reporter.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        tags: ["startup", "technology", "global"],

        breadcrumb: {
          categoryNE: "प्रविधि",
          categoryEN: "Technology",
        },
      },

      {
        id: { EN: "07", NE: "०७" },
        slug: "global-trade-recovery",
        category: "economy",
        primaryFilter: "economy",
        secondaryFilter: "all",

        titleNE: "अन्तर्राष्ट्रिय व्यापारमा सुधार संकेत",
        titleEN: "Signs of improvement in global trade",

        descriptionNE:
          "विश्व व्यापारमा सुधारका संकेत देखिन थालेका छन् जसले आर्थिक स्थिरता तर्फ संकेत गर्छ।",
        descriptionEN:
          "Signs of recovery in global trade indicate improving economic stability.",

        contentNE:
          "विश्वव्यापी आपूर्ति श्रृंखला सुधार हुँदै जाँदा अन्तर्राष्ट्रिय व्यापारमा सकारात्मक वृद्धि देखिएको छ।",
        contentEN:
          "Improving supply chains are contributing to a positive recovery in global trade.",

        image: "/gorkhasamachar/card20.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "७ घण्टा अघि",
        createdAtEN: "7 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "अर्थतन्त्र रिपोर्टर।",
        authorBioEN: "Economy reporter.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        tags: ["economy", "trade", "global"],

        breadcrumb: {
          categoryNE: "अर्थतन्त्र",
          categoryEN: "Economy",
        },
      },

      {
        id: { EN: "08", NE: "०८" },
        slug: "un-summit-conclusion",
        category: "politics",
        primaryFilter: "politics",
        secondaryFilter: "all",

        titleNE: "संयुक्त राष्ट्रसंघको नयाँ बैठक सम्पन्न",
        titleEN: "UN summit concluded",

        descriptionNE:
          "संयुक्त राष्ट्रसंघको उच्चस्तरीय बैठक सम्पन्न भएको छ जसमा विश्व शान्ति र सहयोगबारे छलफल भएको छ।",
        descriptionEN:
          "A high-level UN summit has concluded focusing on global peace and cooperation.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        contentNE:
          "संयुक्त राष्ट्रसंघको बैठकमा जलवायु परिवर्तन, सुरक्षा र आर्थिक सहयोगका विषयमा महत्वपूर्ण निर्णयहरू भएका छन्।",
        contentEN:
          "The UN summit addressed climate change, security, and global economic cooperation.",

        image: "/gorkhasamachar/card11.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "८ घण्टा अघि",
        createdAtEN: "8 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "संयुक्त राष्ट्र रिपोर्टर।",
        authorBioEN: "UN affairs reporter.",

        tags: ["UN", "politics", "global"],

        breadcrumb: {
          categoryNE: "राजनीति",
          categoryEN: "Politics",
        },
      },

      {
        id: { EN: "09", NE: "०९" },
        slug: "border-security-alert",
        category: "conflict",
        primaryFilter: "conflict",
        secondaryFilter: "all",

        titleNE: "सीमावर्ती क्षेत्रमा सुरक्षा सतर्कता बढाइयो",
        titleEN: "Security alert heightened in border region",

        descriptionNE:
          "सीमावर्ती क्षेत्रमा बढ्दो तनावका कारण सुरक्षा व्यवस्था कडा पारिएको छ र निगरानी बढाइएको छ।",
        descriptionEN:
          "Security has been tightened in border regions due to rising tensions.",

        contentNE:
          "सीमा क्षेत्रमा सुरक्षा बलहरूको उपस्थिति बढाइएको छ र सम्भावित जोखिम नियन्त्रणका लागि विशेष निगरानी प्रणाली लागू गरिएको छ।",
        contentEN:
          "Security forces have increased presence along borders with enhanced monitoring systems.",

        image: "/gorkhasamachar/card12.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        createdAtNE: "९ घण्टा अघि",
        createdAtEN: "9 hours ago",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "सुरक्षा रिपोर्टर।",
        authorBioEN: "Security reporter.",

        tags: ["security", "border", "conflict"],

        breadcrumb: {
          categoryNE: "संघर्ष",
          categoryEN: "Conflict",
        },
      },

      {
        id: { EN: "10", NE: "१०" },
        slug: "nepal-india-high-level-talks",
        category: "diplomacy",
        primaryFilter: "diplomacy",
        secondaryFilter: "all",

        titleNE: "नेपाल र भारतबीच उच्चस्तरीय वार्ता",
        titleEN: "High-level talks held between Nepal and India",

        descriptionNE:
          "नेपाल र भारतबीच व्यापार, ऊर्जा र पूर्वाधार विकासबारे महत्वपूर्ण उच्चस्तरीय छलफल भएको छ।",
        descriptionEN:
          "High-level discussions between Nepal and India focused on trade, energy, and infrastructure cooperation.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        contentNE:
          "दुवै देशले आपसी सहयोग विस्तार गर्दै व्यापार र पूर्वाधार विकासलाई नयाँ चरणमा लैजाने प्रतिबद्धता व्यक्त गरेका छन्।",
        contentEN:
          "Both countries committed to expanding cooperation in trade and infrastructure development.",

        image: "/gorkhasamachar/card1.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        createdAtNE: "१० घण्टा अघि",
        createdAtEN: "10 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "कूटनीति रिपोर्टर।",
        authorBioEN: "Diplomacy reporter.",

        tags: ["diplomacy", "Nepal", "India"],

        breadcrumb: {
          categoryNE: "कूटनीति",
          categoryEN: "Diplomacy",
        },
      },
    ],
  },
  {
    slug: "opinion",

    titleNE: "विचार",
    titleEN: "Opinion",

    descriptionNE: "विश्लेषण, टिप्पणी र सम्पादकीय",
    descriptionEN: "Analysis, opinion and editorial content",

    totalNewsEN: "98+",
    totalNewsNE: "९८+",

    showFeatured: true,

    filters: {
      primary: [
        { value: "all", labelNE: "सबै", labelEN: "All" },
        { value: "economy", labelNE: "अर्थतन्त्र", labelEN: "Economy" },
        { value: "politics", labelNE: "राजनीति", labelEN: "Politics" },
        { value: "education", labelNE: "शिक्षा", labelEN: "Education" },
        { value: "society", labelNE: "समाज", labelEN: "Society" },
        { value: "environment", labelNE: "वातावरण", labelEN: "Environment" },
        { value: "media", labelNE: "मिडिया", labelEN: "Media" },
      ],
    },

    news: [
      {
        id: { EN: "01", NE: "०१" },
        slug: "nepal-economic-future-analysis",
        category: "economy",
        primaryFilter: "economy",
        secondaryFilter: "all",

        titleNE: "नेपालको आर्थिक भविष्यबारे विश्लेषण",
        titleEN: "Analysis of Nepal's economic future",

        descriptionNE:
          "नेपालको अर्थतन्त्रको भविष्यबारे गहिरो विश्लेषण गरिएको छ जसले दीर्घकालीन सम्भावना र चुनौतीहरूलाई उजागर गर्छ।",
        descriptionEN:
          "A deep analysis of Nepal's economic future highlights long-term opportunities and challenges.",

        contentNE:
          "नेपालको अर्थतन्त्रले पछिल्लो समय विभिन्न संरचनात्मक परिवर्तनहरूको सामना गरिरहेको छ। रोजगारी, लगानी र उत्पादन क्षेत्रको सुधारलाई ध्यानमा राख्दै दीर्घकालीन आर्थिक रणनीति आवश्यक देखिन्छ।",
        contentEN:
          "Nepal’s economy is undergoing structural changes, requiring long-term strategies focusing on employment, investment, and production growth.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        image: "/gorkhasamachar/card17.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        createdAtNE: "१ घण्टा अघि",
        createdAtEN: "1 hour ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "आर्थिक विश्लेषक र टिप्पणीकार।",
        authorBioEN: "Economy analyst and commentator.",

        tags: ["economy", "analysis", "future"],

        breadcrumb: {
          categoryNE: "अर्थतन्त्र",
          categoryEN: "Economy",
        },
      },

      {
        id: { EN: "02", NE: "०२" },
        slug: "nepal-economy-direction-analysis",
        category: "economy",
        primaryFilter: "economy",
        secondaryFilter: "all",

        titleNE: "नेपालको आर्थिक भविष्य कतातर्फ जाँदैछ?",
        titleEN: "Where is Nepal’s economy heading?",

        descriptionNE:
          "नेपालको आर्थिक अवस्थाबारे विभिन्न दृष्टिकोणबाट विश्लेषण भइरहेको छ जसले नीति निर्माताहरूलाई महत्वपूर्ण संकेत दिन्छ।",
        descriptionEN:
          "Multiple perspectives on Nepal’s economy provide important insights for policymakers.",

        contentNE:
          "नेपालको आर्थिक दिशा र संरचनात्मक सुधारका विषयमा विशेषज्ञहरूले विभिन्न दृष्टिकोण प्रस्तुत गरिरहेका छन्। यसले नीति निर्माण प्रक्रियालाई प्रभाव पारिरहेको छ।",
        contentEN:
          "Experts are presenting diverse views on Nepal’s economic direction, influencing policy formulation.",

        image: "/gorkhasamachar/card16.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        createdAtNE: "२ घण्टा अघि",
        createdAtEN: "2 hours ago",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "आर्थिक नीति विश्लेषक।",
        authorBioEN: "Economic policy analyst.",

        tags: ["economy", "policy", "analysis"],

        breadcrumb: {
          categoryNE: "अर्थतन्त्र",
          categoryEN: "Economy",
        },
      },

      {
        id: { EN: "03", NE: "०३" },
        slug: "youth-politics-perspective-nepal",
        category: "politics",
        primaryFilter: "politics",
        secondaryFilter: "all",

        titleNE: "युवा पुस्ताको राजनीतिप्रतिको दृष्टिकोण",
        titleEN: "Youth perspective on politics",

        descriptionNE:
          "युवा पुस्ताले राजनीतिमा नयाँ सोच र दृष्टिकोण ल्याइरहेका छन् जसले भविष्यको नेतृत्वलाई प्रभाव पार्नेछ।",
        descriptionEN:
          "The younger generation is bringing fresh perspectives to politics, shaping future leadership.",

        contentNE:
          "नेपालमा युवा पुस्ताको राजनीतिक सहभागिता बढ्दै गएको छ। उनीहरूको दृष्टिकोण पारदर्शिता, जवाफदेहिता र परिवर्तनमुखी सोचमा केन्द्रित छ।",
        contentEN:
          "Youth political engagement in Nepal is increasing, focusing on transparency, accountability, and reform-oriented thinking.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        image: "/gorkhasamachar/card15.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "३ घण्टा अघि",
        createdAtEN: "3 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "राजनीति टिप्पणीकार।",
        authorBioEN: "Political commentator.",

        tags: ["politics", "youth", "opinion"],

        breadcrumb: {
          categoryNE: "राजनीति",
          categoryEN: "Politics",
        },
      },

      {
        id: { EN: "04", NE: "०४" },
        slug: "education-system-reform-opinion",
        category: "education",
        primaryFilter: "education",
        secondaryFilter: "all",

        titleNE: "शिक्षा प्रणाली सुधार आवश्यक किन?",
        titleEN: "Why does the education system need reform?",

        descriptionNE:
          "शिक्षा प्रणाली सुधारको आवश्यकता बारे व्यापक चर्चा भइरहेको छ जसले भविष्यको दक्ष जनशक्ति निर्माणमा असर पार्छ।",
        descriptionEN:
          "There is ongoing discussion about education reform and its impact on future workforce development.",

        contentNE:
          "शिक्षा प्रणालीमा सुधार आवश्यक देखिएको छ किनकि वर्तमान संरचना व्यवहारिक ज्ञानभन्दा सैद्धान्तिक शिक्षामा बढी केन्द्रित छ।",
        contentEN:
          "Education reform is needed as the current system is more theory-focused than practical learning.",

        image: "/gorkhasamachar/card14.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "४ घण्टा अघि",
        createdAtEN: "4 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "शिक्षा विश्लेषक।",
        authorBioEN: "Education analyst.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        tags: ["education", "reform", "analysis"],

        breadcrumb: {
          categoryNE: "शिक्षा",
          categoryEN: "Education",
        },
      },

      {
        id: { EN: "05", NE: "०५" },
        slug: "digital-society-nepal-opinion",
        category: "society",
        primaryFilter: "society",
        secondaryFilter: "all",

        titleNE: "डिजिटल युग र नेपाली समाज",
        titleEN: "Digital age and Nepali society",

        descriptionNE:
          "डिजिटल प्रविधिले नेपाली समाजमा ठूलो परिवर्तन ल्याएको छ जसले जीवनशैली र सञ्चारमा नयाँ आयाम थपेको छ।",
        descriptionEN:
          "Digital technology has transformed Nepali society, changing lifestyle and communication patterns.",

        contentNE:
          "डिजिटल प्रविधिको विस्तारले नेपाली समाजमा सूचना पहुँच, शिक्षा र व्यापारमा ठूलो परिवर्तन ल्याएको छ।",
        contentEN:
          "Digital expansion has significantly impacted information access, education, and business in Nepal.",

        image: "/gorkhasamachar/card13.jpg",

        createdAtNE: "५ घण्टा अघि",
        createdAtEN: "5 hours ago",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "समाज विश्लेषक।",
        authorBioEN: "Social analyst.",

        tags: ["society", "digital", "technology"],

        breadcrumb: {
          categoryNE: "समाज",
          categoryEN: "Society",
        },
      },

      {
        id: { EN: "06", NE: "०६" },
        slug: "rural-development-opinion-nepal",
        category: "society",
        primaryFilter: "society",
        secondaryFilter: "all",

        titleNE: "ग्रामीण विकासको वर्तमान अवस्था",
        titleEN: "Current state of rural development",

        descriptionNE:
          "ग्रामीण विकास अझै पनि चुनौतीपूर्ण अवस्थामा रहेको छ र दीर्घकालीन रणनीति आवश्यक छ।",
        descriptionEN:
          "Rural development remains challenging and requires long-term strategies.",

        contentNE:
          "ग्रामीण क्षेत्रमा पूर्वाधार, शिक्षा र स्वास्थ्य सेवामा अझै सुधार आवश्यक छ। विकास असमानता ठूलो चुनौती बनेको छ।",
        contentEN:
          "Rural areas still lack adequate infrastructure, education, and healthcare, with inequality remaining a major challenge.",

        image: "/gorkhasamachar/card12.jpg",

        createdAtNE: "६ घण्टा अघि",
        createdAtEN: "6 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "ग्रामीण विकास विश्लेषक।",
        authorBioEN: "Rural development analyst.",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        tags: ["rural", "development", "society"],

        breadcrumb: {
          categoryNE: "समाज",
          categoryEN: "Society",
        },
      },

      {
        id: { EN: "07", NE: "०७" },
        slug: "climate-change-nepal-opinion",
        category: "environment",
        primaryFilter: "environment",
        secondaryFilter: "all",

        titleNE: "जलवायु परिवर्तन र नेपाल",
        titleEN: "Climate change and Nepal",

        descriptionNE:
          "जलवायु परिवर्तनले नेपालमा गम्भीर वातावरणीय असर पारिरहेको छ जसले हिमाल र कृषि दुवैलाई प्रभावित गरेको छ।",
        descriptionEN:
          "Climate change is seriously impacting Nepal’s environment, mountains, and agriculture.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        contentNE:
          "नेपाल जलवायु परिवर्तनको उच्च जोखिममा रहेको देश हो। हिमाल पग्लिनु, बाढी र पहिरोको वृद्धि यसको प्रमुख असर हुन्।",
        contentEN:
          "Nepal is highly vulnerable to climate change, with melting glaciers and increased floods and landslides.",

        image: "/gorkhasamachar/card11.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "७ घण्टा अघि",
        createdAtEN: "7 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "वातावरण विश्लेषक।",
        authorBioEN: "Environment analyst.",

        tags: ["climate", "environment", "nepal"],

        breadcrumb: {
          categoryNE: "वातावरण",
          categoryEN: "Environment",
        },
      },

      {
        id: { EN: "08", NE: "०८" },
        slug: "media-role-democracy-opinion",
        category: "media",
        primaryFilter: "media",
        secondaryFilter: "all",

        titleNE: "मिडियाको भूमिका र जिम्मेवारी",
        titleEN: "Role and responsibility of media",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        descriptionNE:
          "लोकतान्त्रिक समाजमा मिडियाको भूमिका अत्यन्त महत्वपूर्ण मानिन्छ जसले पारदर्शिता र जवाफदेहिता सुनिश्चित गर्छ।",
        descriptionEN:
          "Media plays a crucial role in democracy by ensuring transparency and accountability.",

        contentNE:
          "मिडियाले समाजलाई सही सूचना प्रदान गर्दै सरकार र नागरिकबीचको सेतुको रूपमा काम गर्छ।",
        contentEN:
          "Media acts as a bridge between government and citizens by providing accurate information.",

        image: "/gorkhasamachar/card1.jpg",

        createdAtNE: "८ घण्टा अघि",
        createdAtEN: "8 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "मिडिया विश्लेषक।",
        authorBioEN: "Media analyst.",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        tags: ["media", "democracy", "opinion"],

        breadcrumb: {
          categoryNE: "मिडिया",
          categoryEN: "Media",
        },
      },

      {
        id: { EN: "09", NE: "०९" },
        slug: "university-digital-education-opinion",
        category: "education",
        primaryFilter: "education",
        secondaryFilter: "all",

        titleNE: "विश्वविद्यालय शिक्षामा नयाँ प्रविधिको प्रयोग",
        titleEN: "Use of new technology in university education",

        descriptionNE:
          "विश्वविद्यालयहरूले डिजिटल शिक्षण पद्धति अपनाउन थालेका छन् जसले उच्च शिक्षामा परिवर्तन ल्याइरहेको छ।",
        descriptionEN:
          "Universities are adopting digital learning methods, transforming higher education.",

        contentNE:
          "डिजिटल शिक्षण प्रणालीले विद्यार्थीको पहुँच र सिकाइ क्षमतालाई विस्तार गरेको छ।",
        contentEN:
          "Digital learning systems are improving access and learning outcomes for students.",

        image: "/gorkhasamachar/card2.jpg",

        createdAtNE: "९ घण्टा अघि",
        createdAtEN: "9 hours ago",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "शिक्षा प्रविधि विश्लेषक।",
        authorBioEN: "Education technology analyst.",

        tags: ["education", "technology", "university"],

        breadcrumb: {
          categoryNE: "शिक्षा",
          categoryEN: "Education",
        },
      },

      {
        id: { EN: "10", NE: "१०" },
        slug: "forest-conservation-opinion-nepal",
        category: "environment",
        primaryFilter: "environment",
        secondaryFilter: "all",

        titleNE: "वन संरक्षण अभियान प्रभावकारी बन्दै",
        titleEN: "Forest conservation campaign proving effective",

        descriptionNE:
          "देशभर सञ्चालन गरिएका वन संरक्षण कार्यक्रमले सकारात्मक परिणाम दिन थालेका छन् जसले वातावरण सुधारमा योगदान दिएको छ।",
        descriptionEN:
          "Forest conservation programs are showing positive environmental results nationwide.",

        contentNE:
          "वन संरक्षण अभियानले जैविक विविधता संरक्षण र वातावरणीय सन्तुलन कायम गर्न महत्वपूर्ण भूमिका खेलिरहेको छ।",
        contentEN:
          "Forest conservation efforts are playing a key role in preserving biodiversity and environmental balance.",

        image: "/gorkhasamachar/card1.jpg",

        createdAtNE: "१० घण्टा अघि",
        createdAtEN: "10 hours ago",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "वातावरण टिप्पणीकार।",
        authorBioEN: "Environment commentator.",

        tags: ["environment", "forest", "conservation"],

        breadcrumb: {
          categoryNE: "वातावरण",
          categoryEN: "Environment",
        },
      },
    ],
  },
  {
    slug: "entertainment",

    titleNE: "मनोरञ्जन",
    titleEN: "Entertainment",

    descriptionNE: "नेपाली मनोरञ्जन जगतका ताजा समाचार",
    descriptionEN: "Latest updates from Nepali entertainment industry",

    totalNewsEN: "176+",
    totalNewsNE: "१७६+",

    showFeatured: true,

    filters: {
      primary: [
        { value: "all", labelNE: "सबै", labelEN: "All" },
        { value: "film", labelNE: "चलचित्र", labelEN: "Film" },
        { value: "music", labelNE: "संगीत", labelEN: "Music" },
        { value: "tv", labelNE: "टेलिभिजन", labelEN: "Television" },
        { value: "celebrity", labelNE: "कलाकार", labelEN: "Celebrity" },
        { value: "event", labelNE: "कार्यक्रम", labelEN: "Events" },
      ],
    },

    news: [
      {
        id: { EN: "01", NE: "०१" },
        slug: "nepali-movie-upcoming-release",
        category: "film",
        primaryFilter: "film",
        secondaryFilter: "all",

        titleNE: "नयाँ नेपाली फिल्म रिलिज हुँदै",
        titleEN: "New Nepali movie releasing soon",

        descriptionNE:
          "नयाँ नेपाली फिल्म चाँडै रिलिज हुने भएको छ जसलाई दर्शकहरूले उत्सुकताका साथ प्रतिक्षा गरिरहेका छन्।",
        descriptionEN:
          "A new Nepali movie is set to release soon, generating strong anticipation among audiences.",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        contentNE:
          "नेपाली फिल्म उद्योगमा नयाँ फिल्महरू निरन्तर उत्पादन भइरहेका छन् र यो फिल्मले दर्शकको अपेक्षा बढाएको छ।",
        contentEN:
          "The Nepali film industry continues to grow, with this upcoming release raising audience expectations.",

        image: "/gorkhasamachar/card5.jpg",

        createdAtNE: "१ घण्टा अघि",
        createdAtEN: "1 hour ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "मनोरञ्जन रिपोर्टर।",
        authorBioEN: "Entertainment reporter.",

        tags: ["film", "nepal", "entertainment"],

        breadcrumb: {
          categoryNE: "चलचित्र",
          categoryEN: "Film",
        },
      },

      {
        id: { EN: "02", NE: "०२" },
        slug: "popular-singer-new-song-release",
        category: "music",
        primaryFilter: "music",
        secondaryFilter: "all",

        titleNE: "लोकप्रिय गायकले नयाँ गीत सार्वजनिक गरे",
        titleEN: "Popular singer releases new song",

        descriptionNE:
          "एक चर्चित गायकले नयाँ म्युजिक भिडियो सार्वजनिक गरेका छन् जसले दर्शकको राम्रो प्रतिक्रिया पाइरहेको छ।",
        descriptionEN:
          "A popular singer has released a new music video receiving strong audience response.",

        contentNE:
          "संगीत क्षेत्रमा नयाँ गीतहरूको प्रतिस्पर्धा बढ्दै गएको छ र यो गीतले सामाजिक सञ्जालमा राम्रो लोकप्रियता कमाएको छ।",
        contentEN:
          "The music industry is becoming highly competitive, and this song has gained strong social media traction.",

        image: "/gorkhasamachar/card4.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        createdAtNE: "२ घण्टा अघि",
        createdAtEN: "2 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "संगीत रिपोर्टर।",
        authorBioEN: "Music reporter.",

        tags: ["music", "song", "nepal"],

        breadcrumb: {
          categoryNE: "संगीत",
          categoryEN: "Music",
        },
      },

      {
        id: { EN: "03", NE: "०३" },
        slug: "tv-show-new-season-start",
        category: "tv",
        primaryFilter: "tv",
        secondaryFilter: "all",

        titleNE: "टेलिभिजन शोको नयाँ सिजन सुरु",
        titleEN: "New season of TV show begins",

        descriptionNE:
          "लोकप्रिय टेलिभिजन शोको नयाँ सिजन सुरु भएको छ जसमा नयाँ ट्विस्ट र प्रतियोगिताहरू समावेश छन्।",
        descriptionEN:
          "A new season of a popular TV show has started with new twists and competitions.",

        contentNE:
          "टेलिभिजन शोहरू दर्शकबीच अत्यन्त लोकप्रिय छन् र नयाँ सिजनले दर्शकलाई थप मनोरञ्जन दिने अपेक्षा गरिएको छ।",
        contentEN:
          "TV shows remain highly popular, and the new season is expected to provide more entertainment.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        image: "/gorkhasamachar/card3.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "३ घण्टा अघि",
        createdAtEN: "3 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "टेलिभिजन रिपोर्टर।",
        authorBioEN: "Television reporter.",

        tags: ["tv", "show", "entertainment"],

        breadcrumb: {
          categoryNE: "टेलिभिजन",
          categoryEN: "Television",
        },
      },

      {
        id: { EN: "04", NE: "०४" },
        slug: "celebrity-new-project-announcement",
        category: "celebrity",
        primaryFilter: "celebrity",
        secondaryFilter: "all",

        titleNE: "लोकप्रिय कलाकारले नयाँ परियोजना घोषणा गरे",
        titleEN: "Popular celebrity announces new project",

        descriptionNE:
          "एक चर्चित कलाकारले नयाँ मनोरञ्जन परियोजना घोषणा गरेका छन् जसले फ्यानहरूमा उत्साह ल्याएको छ।",
        descriptionEN:
          "A popular celebrity has announced a new entertainment project exciting fans.",

        contentNE:
          "कलाकारहरूले नयाँ परियोजनाहरू मार्फत आफ्नो करियर विस्तार गर्दै छन् र यो घोषणा निकै चर्चित बनेको छ।",
        contentEN:
          "Celebrities are expanding their careers with new projects, and this announcement has gained attention.",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        image: "/gorkhasamachar/card2.jpg",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        createdAtNE: "४ घण्टा अघि",
        createdAtEN: "4 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "सेलिब्रिटी रिपोर्टर।",
        authorBioEN: "Celebrity reporter.",

        tags: ["celebrity", "project", "entertainment"],

        breadcrumb: {
          categoryNE: "कलाकार",
          categoryEN: "Celebrity",
        },
      },

      {
        id: { EN: "05", NE: "०५" },
        slug: "music-festival-preparation",
        category: "event",
        primaryFilter: "event",
        secondaryFilter: "all",

        titleNE: "संगीत महोत्सवको तयारी सुरु",
        titleEN: "Preparation for music festival begins",

        descriptionNE:
          "आगामी संगीत महोत्सवको तयारी सुरु गरिएको छ जसमा राष्ट्रिय तथा अन्तर्राष्ट्रिय कलाकार सहभागी हुनेछन्।",
        descriptionEN:
          "Preparation for an upcoming music festival has begun with national and international artists.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        contentNE:
          "सांस्कृतिक कार्यक्रमहरूले देशको मनोरञ्जन क्षेत्रलाई थप सक्रिय बनाउँदै छन् र यो महोत्सव ठूलो हुने अपेक्षा छ।",
        contentEN:
          "Cultural events are boosting the entertainment industry, and this festival is expected to be large.",

        image: "/gorkhasamachar/card1.jpg",

        createdAtNE: "५ घण्टा अघि",
        createdAtEN: "5 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "इभेन्ट रिपोर्टर।",
        authorBioEN: "Event reporter.",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        tags: ["event", "music", "festival"],

        breadcrumb: {
          categoryNE: "कार्यक्रम",
          categoryEN: "Events",
        },
      },

      {
        id: { EN: "06", NE: "०६" },
        slug: "nepali-film-international-selection",
        category: "film",
        primaryFilter: "film",
        secondaryFilter: "all",

        titleNE: "नेपाली फिल्म अन्तर्राष्ट्रिय फिल्म फेस्टिभलमा चयन",
        titleEN: "Nepali film selected for international festival",

        descriptionNE:
          "एक नेपाली फिल्म अन्तर्राष्ट्रिय फिल्म फेस्टिभलमा चयन भएको छ जसले देशको फिल्म उद्योगलाई गर्व दिलाएको छ।",
        descriptionEN:
          "A Nepali film has been selected for an international festival bringing pride to the industry.",

        contentNE:
          "नेपाली फिल्महरू अन्तर्राष्ट्रिय स्तरमा पहिचान बनाउन थालेका छन् र यो चयन त्यसको राम्रो उदाहरण हो।",
        contentEN:
          "Nepali films are gaining international recognition, and this selection is a strong example.",

        image: "/heroimage/hero1.png",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "६ घण्टा अघि",
        createdAtEN: "6 hours ago",
        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "फिल्म विश्लेषक।",
        authorBioEN: "Film analyst.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        tags: ["film", "festival", "international"],

        breadcrumb: {
          categoryNE: "चलचित्र",
          categoryEN: "Film",
        },
      },

      {
        id: { EN: "07", NE: "०७" },
        slug: "folk-song-social-media-trend",
        category: "music",
        primaryFilter: "music",
        secondaryFilter: "all",

        titleNE: "नयाँ लोकगीतले सामाजिक सञ्जालमा लोकप्रियता कमायो",
        titleEN: "New folk song gains popularity on social media",

        descriptionNE:
          "हालै सार्वजनिक भएको लोकगीतले सामाजिक सञ्जालमा व्यापक चर्चा र लोकप्रियता कमाएको छ।",
        descriptionEN:
          "A recently released folk song is trending widely on social media.",

        contentNE:
          "लोकगीतले नेपाली संस्कृति र परम्परालाई डिजिटल प्लेटफर्ममा नयाँ जीवन दिएको छ।",
        contentEN:
          "Folk music is giving Nepali culture a strong presence on digital platforms.",

        image: "/heroimage/heroImage.png",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        createdAtNE: "७ घण्टा अघि",
        createdAtEN: "7 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "संगीत टिप्पणीकार।",
        authorBioEN: "Music commentator.",

        tags: ["music", "folk", "viral"],

        breadcrumb: {
          categoryNE: "संगीत",
          categoryEN: "Music",
        },
      },

      {
        id: { EN: "08", NE: "०८" },
        slug: "comedian-new-show-announcement",
        category: "celebrity",
        primaryFilter: "celebrity",
        secondaryFilter: "all",

        titleNE: "हास्य कलाकारको नयाँ कमेडी शो घोषणा",
        titleEN: "Comedian announces new comedy show",

        descriptionNE:
          "एक हास्य कलाकारले नयाँ कमेडी शो घोषणा गरेका छन् जसले दर्शकलाई मनोरञ्जन दिने अपेक्षा गरिएको छ।",
        descriptionEN:
          "A comedian has announced a new comedy show expected to entertain audiences.",

        contentNE:
          "कमेडी शोहरू नेपाली मनोरञ्जन क्षेत्रमा अत्यन्त लोकप्रिय छन् र नयाँ शोले दर्शकको ध्यान आकर्षित गरेको छ।",
        contentEN:
          "Comedy shows are highly popular in Nepal’s entertainment sector, attracting strong audience interest.",
        image: "/heroimage/heroc.png",
        createdAtNE: "८ घण्टा अघि",
        createdAtEN: "8 hours ago",
        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "हास्य रिपोर्टर।",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        authorBioEN: "Comedy reporter.",
        tags: ["comedy", "celebrity", "show"],
        breadcrumb: {
          categoryNE: "कलाकार",
          categoryEN: "Celebrity",
        },
      },
    ],
  },

  {
    slug: "abroad-nepali",

    titleNE: "विदेशमा नेपाली",
    titleEN: "Nepali Abroad",

    descriptionNE: "विदेशमा रहेका नेपालीहरूका ताजा समाचार",
    descriptionEN: "Latest news about Nepali people living abroad",

    totalNewsEN: "89+",
    totalNewsNE: "८९+",

    showFeatured: false,

    filters: {
      primary: [
        { value: "all", labelNE: "सबै", labelEN: "All" },
        { value: "migration", labelNE: "प्रवास", labelEN: "Migration" },
        { value: "employment", labelNE: "रोजगारी", labelEN: "Employment" },
        { value: "education", labelNE: "शिक्षा", labelEN: "Education" },
        { value: "community", labelNE: "समुदाय", labelEN: "Community" },
        { value: "remittance", labelNE: "रेमिट्यान्स", labelEN: "Remittance" },
      ],
    },

    news: [
      {
        id: { EN: "01", NE: "०१" },
        slug: "nepali-workers-status-abroad",
        category: "employment",
        primaryFilter: "employment",
        secondaryFilter: "all",

        titleNE: "विदेशमा नेपाली कामदारको अवस्था",
        titleEN: "Situation of Nepali workers abroad",

        descriptionNE:
          "विदेशमा नेपाली कामदारहरूको अवस्था सुधार हुँदै गएको छ जसले रोजगारी सुरक्षामा सकारात्मक संकेत दिएको छ।",
        descriptionEN:
          "The condition of Nepali workers abroad is improving, showing positive signs in job security.",

        contentNE:
          "विदेशमा रहेका नेपाली कामदारहरूको काम गर्ने अवस्था, सुरक्षा र कानुनी संरक्षणमा विस्तारै सुधार भइरहेको छ।",
        contentEN:
          "Working conditions, safety, and legal protection for Nepali workers abroad are gradually improving.",

        image: "/gorkhasamachar/card8.jpg",

        createdAtNE: "५ घण्टा अघि",
        createdAtEN: "5 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "प्रवास रिपोर्टर।",
        authorBioEN: "Migration reporter.",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        tags: ["abroad", "workers", "migration"],

        breadcrumb: {
          categoryNE: "रोजगारी",
          categoryEN: "Employment",
        },
      },

      {
        id: { EN: "02", NE: "०२" },
        slug: "nepali-workers-gradual-improvement",
        category: "employment",
        primaryFilter: "employment",
        secondaryFilter: "all",

        titleNE: "विदेशमा नेपाली कामदारको अवस्था सुधार हुँदै",
        titleEN: "Condition of Nepali workers abroad improving",

        descriptionNE:
          "विदेशमा रहेका नेपाली कामदारहरूको अवस्था विस्तारै सुधार हुँदै गएको छ र नयाँ नीतिहरू लागू भइरहेका छन्।",
        descriptionEN:
          "The condition of Nepali workers abroad is gradually improving with new policies being introduced.",

        contentNE:
          "सरकारी र अन्तर्राष्ट्रिय प्रयासहरूले गर्दा नेपाली कामदारहरूको जीवनस्तर र सुरक्षा दुवैमा सुधार देखिएको छ।",
        contentEN:
          "Government and international efforts are improving both living conditions and safety of Nepali workers.",

        image: "/gorkhasamachar/card7.jpg",

        createdAtNE: "२ घण्टा अघि",
        createdAtEN: "2 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "प्रवास विश्लेषक।",
        authorBioEN: "Migration analyst.",

        tags: ["workers", "improvement", "abroad"],

        breadcrumb: {
          categoryNE: "रोजगारी",
          categoryEN: "Employment",
        },
      },

      {
        id: { EN: "03", NE: "०३" },
        slug: "nepali-students-abroad-increasing",
        category: "education",
        primaryFilter: "education",
        secondaryFilter: "all",

        titleNE: "विदेशमा नेपाली विद्यार्थीको संख्या बढ्दै",
        titleEN: "Number of Nepali students abroad increasing",

        descriptionNE:
          "उच्च शिक्षाका लागि विदेश जाने नेपाली विद्यार्थीको संख्या लगातार बढिरहेको छ।",
        descriptionEN:
          "The number of Nepali students going abroad for higher education is steadily increasing.",

        contentNE:
          "उच्च शिक्षा र राम्रो अवसरको खोजीमा नेपाली विद्यार्थीहरू विभिन्न देशमा अध्ययनका लागि जाँदै छन्।",
        contentEN:
          "Nepali students are traveling abroad in search of better education and opportunities.",

        image: "/gorkhasamachar/card6.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "३ घण्टा अघि",
        createdAtEN: "3 hours ago",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "शिक्षा प्रवास रिपोर्टर।",
        authorBioEN: "Education migration reporter.",

        tags: ["students", "education", "abroad"],

        breadcrumb: {
          categoryNE: "शिक्षा",
          categoryEN: "Education",
        },
      },

      {
        id: { EN: "04", NE: "०४" },
        slug: "gulf-employment-opportunities-expanding",
        category: "employment",
        primaryFilter: "employment",
        secondaryFilter: "all",

        titleNE: "गल्फ देशहरूमा रोजगारी अवसर विस्तार",
        titleEN: "Employment opportunities expanding in Gulf countries",

        descriptionNE:
          "गल्फ देशहरूमा नेपालीका लागि रोजगारी अवसर बढ्दै गएको छ जसले वैदेशिक रोजगारलाई मजबुत बनाएको छ।",
        descriptionEN:
          "Employment opportunities for Nepali workers are increasing in Gulf countries.",

        contentNE:
          "गल्फ क्षेत्रमा निर्माण, सेवा र औद्योगिक क्षेत्रमा नेपालीहरूको माग बढ्दै गएको छ।",
        contentEN:
          "Demand for Nepali workers in construction, service, and industrial sectors is increasing in Gulf countries.",

        image: "/gorkhasamachar/card5.jpg",

        createdAtNE: "४ घण्टा अघि",
        createdAtEN: "4 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "वैदेशिक रोजगार विश्लेषक।",
        authorBioEN: "Foreign employment analyst.",

        tags: ["gulf", "employment", "workers"],
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        breadcrumb: {
          categoryNE: "रोजगारी",
          categoryEN: "Employment",
        },
      },

      {
        id: { EN: "05", NE: "०५" },
        slug: "nepali-community-abroad-active",
        category: "community",
        primaryFilter: "community",
        secondaryFilter: "all",

        titleNE: "विदेशमा नेपाली समुदायको सक्रियता",
        titleEN: "Nepali community abroad becoming more active",

        descriptionNE:
          "विदेशमा रहेका नेपाली समुदायहरू विभिन्न सामाजिक र सांस्कृतिक गतिविधिमा सक्रिय हुँदै गएका छन्।",
        descriptionEN:
          "Nepali communities abroad are increasingly active in social and cultural activities.",

        contentNE:
          "प्रवासमा रहेका नेपालीहरूले सांस्कृतिक कार्यक्रम, सामाजिक सहयोग र एकता बढाउने कार्यहरू गर्दै आएका छन्।",
        contentEN:
          "Nepali communities abroad are organizing cultural and social initiatives to strengthen unity.",

        image: "/gorkhasamachar/card4.jpg",

        createdAtNE: "५ घण्टा अघि",
        createdAtEN: "5 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "समुदाय रिपोर्टर।",
        authorBioEN: "Community reporter.",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        tags: ["community", "abroad", "nepali"],

        breadcrumb: {
          categoryNE: "समुदाय",
          categoryEN: "Community",
        },
      },

      {
        id: { EN: "06", NE: "०६" },
        slug: "remittance-increase-nepal",
        category: "remittance",
        primaryFilter: "remittance",
        secondaryFilter: "all",

        titleNE: "रेमिट्यान्समा वृद्धि देखियो",
        titleEN: "Increase in remittance flow",

        descriptionNE:
          "विदेशबाट नेपाल आउने रेमिट्यान्समा उल्लेखनीय वृद्धि भएको छ जसले अर्थतन्त्रमा सकारात्मक प्रभाव पारेको छ।",
        descriptionEN:
          "There has been a significant increase in remittance inflow to Nepal.",

        contentNE:
          "रेमिट्यान्स नेपालको अर्थतन्त्रको मुख्य आधार बनेको छ र यसले लाखौं परिवारलाई आर्थिक सहयोग पुर्‍याइरहेको छ।",
        contentEN:
          "Remittance is a major pillar of Nepal’s economy supporting millions of households.",

        image: "/gorkhasamachar/card3.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "६ घण्टा अघि",
        createdAtEN: "6 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "अर्थ प्रवास रिपोर्टर।",
        authorBioEN: "Remittance and migration reporter.",

        tags: ["remittance", "economy", "abroad"],

        breadcrumb: {
          categoryNE: "रेमिट्यान्स",
          categoryEN: "Remittance",
        },
      },

      {
        id: { EN: "07", NE: "०७" },
        slug: "nepali-workers-challenges-abroad",
        category: "employment",
        primaryFilter: "employment",
        secondaryFilter: "all",

        titleNE: "विदेशमा नेपाली कामदारका समस्या",
        titleEN: "Challenges faced by Nepali workers abroad",

        descriptionNE:
          "विदेशमा नेपाली कामदारहरूले विभिन्न समस्याहरू जस्तै श्रम शोषण र सुरक्षासम्बन्धी चुनौतीहरू सामना गरिरहेका छन्।",
        descriptionEN:
          "Nepali workers abroad face various challenges including labor exploitation and safety issues.",

        contentNE:
          "वैदेशिक रोजगारीमा रहेका कामदारहरूको अधिकार संरक्षण र सुरक्षित कार्य वातावरण अझै चुनौतीपूर्ण छ।",
        contentEN:
          "Protecting workers’ rights and ensuring safe working environments abroad remains a challenge.",

        image: "/gorkhasamachar/card2.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "७ घण्टा अघि",
        createdAtEN: "7 hours ago",

        readTimeEN: "4 min read",
        readTimeNE: "४ मिनेट",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "श्रम प्रवास विश्लेषक।",
        authorBioEN: "Labor migration analyst.",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        tags: ["workers", "challenges", "abroad"],

        breadcrumb: {
          categoryNE: "रोजगारी",
          categoryEN: "Employment",
        },
      },

      {
        id: { EN: "08", NE: "०८" },
        slug: "nepali-associations-abroad-role",
        category: "community",
        primaryFilter: "community",
        secondaryFilter: "all",

        titleNE: "विदेशमा नेपाली संघ संस्थाको भूमिका",
        titleEN: "Role of Nepali organizations abroad",

        descriptionNE:
          "विदेशमा रहेका नेपाली संघ संस्थाहरूले समुदायलाई एकजुट बनाउन र सहयोग पुर्‍याउन महत्वपूर्ण भूमिका खेलिरहेका छन्।",
        descriptionEN:
          "Nepali organizations abroad play an important role in uniting and supporting communities.",

        contentNE:
          "यी संस्थाहरूले सामाजिक सहयोग, सांस्कृतिक संरक्षण र आपतकालीन सहयोगमा महत्वपूर्ण योगदान दिइरहेका छन्।",
        contentEN:
          "These organizations contribute to social support, cultural preservation, and emergency assistance.",

        image: "/gorkhasamachar/card1.jpg",
        imageDescpEN: "Photo: Parliament building, Singha Durbar, Kathmandu",
        imageDescpNE: "तस्बिर: संसद भवन",
        newsDescription:
          "This budget is a concrete step towards the development and prosperity of Nepal.",

        createdAtNE: "८ घण्टा अघि",
        createdAtEN: "8 hours ago",

        readTimeEN: "3 min read",
        readTimeNE: "३ मिनेट",
        keyPoint:
          "बजेटमा शिक्षा, स्वास्थ्य, कृषि र पूर्वाधार विकासमा विशेष जोड दिइएको छ। स्थानीय सरकारलाई दिइने अनुदान",
        keyPointsNE:
          "बजेटमा गोरखा जिल्लाका लागि पूर्वाधार विकासमा विशेष रकम विनियोजन गरिएको छ।",
        keyPointsEN:
          "Special funds have been allocated for infrastructure development in Gorkha district in the budget",

        authorNE: "सुरेश अधिकारी",
        authorEN: "Suresh Adhikari",
        authorInitials: "SA",
        authorBioNE: "समुदाय प्रवास रिपोर्टर।",
        authorBioEN: "Community migration reporter.",

        tags: ["community", "organizations", "abroad"],

        breadcrumb: {
          categoryNE: "समुदाय",
          categoryEN: "Community",
        },
      },
    ],
  },
];