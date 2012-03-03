var Quotation=new Array() // do not change this!

Quotation[0] = "On the infrequent occasions when I have been called upon in a formal place to play the bongo drums, the introducer never seems to find it necessary to mention that I also do theoretical physics.";
Quotation[1] = "Our imagination is stretched to the utmost, not, as in fiction, to imagine things which are not really there, but just to comprehend those things which are there.";
Quotation[2] = "The worthwhile problems are the ones you can really solve or help solve, the ones you can really contribute something to. ... No problem is too small or too trivial if we can really do something about it.";
Quotation[3] = "Science is the belief in the ignorance of experts.";
Quotation[4] = "If I could explain it to the average person, I wouldn't have been worth the Nobel Prize.";
Quotation[5] = "For a successful technology, reality must take precedence over public relations, for nature cannot be fooled.";
Quotation[6] = "What I cannot create, I do not understand.";
Quotation[7] = "We scientists are clever - too clever - are you not satisfied? Is four square miles in one bomb not enough? Men are still thinking. Just tell us how big you want it. ";
Quotation[8] = "A great deal more is known than has been proved.";
Quotation[9] = "And you will find someday that, after all, it isn't as horrible as it looks.";
Author = "<br /><h4>-- Richard Feynman --</h4>";

var Q = Quotation.length;
var whichQuotation=Math.round(Math.random()*(Q-1));
Display = Quotation[whichQuotation] + Author;
function showQuotation(){document.write(Display);}
