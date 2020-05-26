export const mockProducts = [
  {
    id: 1,
    barcode: 1,
    name: "Acidolit",
    desciption:
      "Acidolit (bez smaku) proszek do przyg. rozt. doust. x 10 sasz.",
    image:
      "https://www.apteka-melissa.pl/produkty_zdjecia/acidolit-o-smaku-jablkowym-10-sasz.jpg",
    comments: [
      {
        text: "long comment",
        localization: "pl_warsaw_powisle",
        parts: [
          {
            text: "Opakowanie z kartonu",
            destination: "paper_pl_warsaw"
          },
          {
            text: "Kryszeczka",
            destination: "plastic_pl_warsaw"
          },
          {
            text: "Przeterminowany lek",
            destination: "drugstore_type1"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    barcode: 2,
    name: "Sok",
    desciption: "Sok",
    image:
      "https://arkanasmaku.pl/environment/cache/images/500_500_productGfx_44114/SW_3L_pomarancza.jpg",
    comments: [
      {
        text: "long comment",
        localization: "pl_warsaw_powisle",
        parts: [
          {
            text: "Opakowanie z kartonu",
            destination: "paper_pl_warsaw"
          },
          {
            text: "Kryszeczka",
            destination: "plastic_pl_warsaw"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    barcode: 3,
    name: "Yogurt",
    desciption: "Yogurt",
    image: "https://eoreco.pl/img/259457/1.jpg",
    comments: [
      {
        text: "long comment",
        localization: "pl_warsaw_powisle",
        parts: [
          {
            text: "Opakowanie z kartonu",
            destination: "paper_pl_warsaw"
          },
          {
            text: "Kryszeczka",
            destination: "mix_pl_warsaw"
          }
        ]
      }
    ]
  }
];

export const DESTINATIONS = [
  {
    id: "paper_pl_warsaw",
    name: "Kosz papierowy",
    color: "rgb(17, 141, 193)"
  },
  {
    id: "plastic_pl_warsaw",
    name: "Kosz plastykowy",
    color: "rgb(254, 191, 9)"
  },
  {
    id: "mix_pl_warsaw",
    name: "Kosz mieszany",
    color: "rgb(1, 1, 1)"
  },
  {
    id: "drugstore_type1",
    name: "Apteka",
    color: "rgb(87, 182, 213)",
    link:
      "https://www.google.com/maps/search/apteka+warszawa/@52.2285811,20.9629607,12.28z/data=!4m2!2m1!6e2"
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
