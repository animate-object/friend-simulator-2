import _ from "lodash";

const TEXT = [
  "Portland flexitarian banh mi, migas actually affogato craft beer af disrupt normcore seitan bushwick biodiesel polaroid truffaut.",
  "Tote bag gluten-free selvage, heirloom kogi YOLO pitchfork mixtape neutra tumeric tacos pour-over swag gentrify.",
  "Brunch godard pork belly, you probably haven't heard of them plaid aesthetic fashion axe 3 wolf moon sriracha.",
  "Mixtape paleo try-hard portland photo booth tumblr affogato.",
  "Fixie af retro jianbing tumblr cred vice keffiyeh you probably haven't heard of them etsy chia biodiesel.",
  "Humblebrag lyft yr selfies, thundercats prism hoodie.",
  "Pabst kogi disrupt PBR&B.",
  "Shaman slow-carb biodiesel, blog mumblecore bushwick pabst next level raclette tbh tumeric cold-pressed.",
  "Chicharrones waistcoat truffaut slow-carb try-hard, franzen hot chicken raw denim tbh.",
  "Offal occupy celiac listicle.",
  "Tofu crucifix intelligentsia before they sold out shaman typewriter slow-carb lo-fi gastropub.",
  "Neutra irony you probably haven't heard of them schlitz, slow-carb flexitarian deep v waistcoat biodiesel.",
  "Irony squid you probably haven't heard of them intelligentsia coloring book artisan.",
  "Pinterest leggings kinfolk fashion axe lomo live-edge.",
  "Poutine photo booth coloring book, craft beer af man bun literally pitchfork kickstarter.",
  "Activated charcoal meh organic brooklyn coloring book.",
  "Tote bag lumbersexual health goth +1 sriracha occupy vaporware meh cloud bread glossier migas.",
  "Four dollar toast brunch sartorial tote bag, tbh taiyaki fam blog kickstarter iceland marfa raclette venmo williamsburg.",
  "Bicycle rights leggings blog etsy cloud bread kinfolk irony locavore street art lo-fi ethical hella enamel pin.",
  "Fingerstache church-key gochujang put a bird on it keytar kombucha pork belly vice sriracha lo-fi tousled venmo occupy health goth.",
  "Kitsch yuccie retro, narwhal ethical ramps humblebrag blog venmo.",
  "Actually pug four loko PBR&B intelligentsia viral, iceland leggings poke bushwick fanny pack live-edge artisan.",
  "Wayfarers authentic chia tacos palo santo succulents paleo live-edge thundercats art party godard.",
  "Gluten-free snackwave pickled, unicorn prism cray fashion axe cred sustainable swag health goth freegan.",
  "Bespoke portland occupy, swag ennui roof party lumbersexual la croix you probably haven't heard of them lo-fi before they sold out farm-to-table mixtape.",
  "Chicharrones tacos franzen YOLO.",
  "Kinfolk yr XOXO pour-over locavore distillery deep v whatever gastropub enamel pin schlitz.",
  "Tattooed flexitarian unicorn, woke marfa waistcoat quinoa authentic letterpress bitters pour-over try-hard PBR&B neutra.",
];

const FAKES = {
  TEXT: _.shuffle(TEXT),
};

export default FAKES;
