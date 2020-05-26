export const mockProducts = [
  {
    id: 1, //Scan, full data
    barcode: 5901821958196,
    name: "VACO Spray",
    desciption: "MAX na komary, kleszcze, meszki (mini) 50ml",
    image:
      "https://galeriaogrodu.pl/userdata/public/gfx/6514/DV-73-VACO-Spray-MAX-na-komary%2C-kleszcze%2C-meszki-50-ml-5901821958196.jpg",
    comments: [
      {
        text:
          "Ensure aerosols are completely empty before recycling; Do not pierce, crush or flatten aerosol cans; Detach any loose or easily removable parts, such as the lid, and dispose of them with the rest of your recycling.  ",
        localization: "pl_warsaw_powisle",
        parts: [
          {
            text: "throw away the metal part into:",
            destination: "mix_pl_warsaw"
          },
          {
            text: "throw away the plastic part into:",
            destination: "plastic_pl_warsaw"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    barcode: 2,
    name: "Bioracef",
    desciption: "(cefuroksym (aksetyl cefuroksymu)) - tabletki powlekane",
    image: "https://ktomalek.pl/zdjecia/bioracef-interakcje-ulotka-B3590803",
    comments: [
      {
        text:
          "Please do not flush the remnants of the medicine into the toilet and do not throw it into the trash can! It is very dangerous for the environment.",
        localization: "pl_warsaw_powisle",
        parts: [
          {
            text: "Please threw the Carton packaging into:",
            destination: "paper_pl_warsaw"
          },
          {
            text: "Take the rest of the medicine to the nearest pharmacy",
            destination: "drugstore_type1"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    barcode: 3,
    name: "Fonix",
    desciption: "Ból Uszu, spray, 15ml",
    image:
      "https://static.aptekagemini.pl/media/products/b_/7_/b_/b7b8b1452cd4b55102c30c42a22c8cea/images/thumbnail/large_47304.jpg",
    comments: []
    // [
    //   {
    //     text: "", // - Unfortunatly, we dont have a recucling instructions for this product. Let's ask Bin Community for help :3
    //     localization: "pl_warsaw_powisle",
    //     parts: [
    //       {
    //         text: "Opakowanie z kartonu",
    //         destination: "paper_pl_warsaw"
    //       },
    //       {
    //         text: "Kryszeczka",
    //         destination: "mix_pl_warsaw"
    //       }
    //     ]
    //   }
    // ]
  }
];

export const DESTINATIONS = [
  {
    id: "paper_pl_warsaw",
    name: "Paper",
    color: "rgb(218, 171, 80)"
  },
  {
    id: "plastic_pl_warsaw",
    name: "Plastic",
    color: "rgb(254, 191, 9)"
  },
  {
    id: "mix_pl_warsaw",
    name: "Mixed",
    color: "rgb(110, 108, 202)"
  },
  {
    id: "drugstore_type1",
    name: "Apteka",
    color: "rgb(207, 121, 121)",
    link: "https://goo.gl/maps/1HVHvv9e4CMoDgSu6"
  }
];

// // DB STRUCTURE
// Product
//     id:IntegerField
//     name : TextField
//     image: TextField
//     desciption : TextField

// getProduct(id):
//     return Post.objects.all(id=id)

// addComment:
//     Product.comments.extend(Comment('text','pl_warsaw_powisle','papier_pl_warsaw_powisle','aptek_type1'))

// Comment
//     product: ForgeinKey(Product)
//     text : TextField
//     localization : TextField ('pl_warsaw_powisle')
//     parts: ListField(EmbeddedModelField('Comment'))

// Parts
//     comment: ForgeinKey(Comment)
//     text: TextField
//     desciption: TextField
//     destination: TextField
