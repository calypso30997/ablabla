function BiblioTeka(dasaxeleba
					,avtori
					,GamocemisQalaqi
					,gamomcemloba
					,GamocemisTseli
					,Janri
					,URLimg)
  {
    this.dasaxeleba = dasaxeleba;
	this.avtori = avtori;
	this.GamocemisQalaqi = GamocemisQalaqi;
	this.gamomcemloba = gamomcemloba;
	this.GamocemisTseli = GamocemisTseli;
	this.Janri = Janri;
	this.URLimg = URLimg;
	this.prntLn = prntLn;
  }
function prntLn(I)
  {
	Result = Result + "<tr>";
	  Result = Result + "<td align='right'>" + (I + 1) + ".</td>";
	  Result = Result + "<td>" + Book[I].dasaxeleba + "</td>";
	  Result = Result + "<td>" + Book[I].avtori + "</td>"; 
	  Result = Result + "<td>" + Book[I].GamocemisQalaqi + "</td>"; 
	  Result = Result + "<td>" + Book[I].gamomcemloba + "</td>";
	  Result = Result + "<td>" + Book[I].GamocemisTseli + "</td>";
 	  Result = Result + "<td>" + Book[I].Janri + "</td>";
	  Result = Result + "<td><img src='images/" + Book[I].URLimg + "'></td>";
	Result = Result + "</tr>";
  }
function prntHead()
  {
	Result = Result + "<tr>";
	  Result = Result + "<th>რ.ნ.</th>";
	  Result = Result + "<th>დასახელება</th>";
	  Result = Result + "<th>ავტორი</th>"; 
	  Result = Result + "<th>ქალაქი</th>"; 
	  Result = Result + "<th>გამომცემლობა</th>";
	  Result = Result + "<th>წელი</th>"; 
	  Result = Result + "<th>ჟანრი</th>";
	  Result = Result + "<th>გარეკანი</th>";
	Result = Result + "</tr>";
  }

var Book = [];// an new array();
Book[0] = new BiblioTeka("პროგრამირება"
                        ,"კ. ჯერმეინი"
						,"მოსკოვი"
						,"მირ"
						,1983
						,"პროგრამორება"
						,"image_1.jpg");
Book[1] = new BiblioTeka("ვებ სერვერი Apache-ის ადმინისტრირება"
                        ,"სკოტ ხოკინსი"
						,"მოსკოვი"
						,"ბილიამსი"
						,2001);
Book[2] = new BiblioTeka("VBA 6.3"
                        ,"გიუნტერ შტაინერი"
						,"მოსკოვი"
						,""
						,2002);
Book[3] = new BiblioTeka("ხელოვნური ინტელექტი"
                        ,"ა. ენდრიუ"
						,"კიევი"
						,"მირ"
						,1985);
Book[4] = new BiblioTeka("JavaScript ცნობარი"
                        ,"რიკ დარნელი"
						,"სანქტ-პეტერბურგი"
						,""
						,2003);
Book[5] = new BiblioTeka("Microsoft-ის OLAP ტეხნოლოგიაში შესავალი"
                        ,"ალექსანდრ ფედოროვი"
						,"ხარკოვი"
						,"დიალოგმიფი"
						,2002);
Book[6] = new BiblioTeka("Microsoft-ის OLAP ტეხნოლოგიაში შესავალი"
                        ,"ნატალია ელმანოვა"
						,"ხარკოვი"
						,"დიალოგმიფი"
						,2002);

Book[7] = new BiblioTeka("ასემბლერი"
                        ,"კ.გ. ფიგურნოვი"
						,"მოსკოვი"
						,"რადიო ი სვიაზ"
						,2000);
Book[8] = new BiblioTeka("Java-ზე პროგრამირების საფუძვლები"
                        ,"ვ.ვ. მასლოვი"
						,"მოსკოვი"
						,"იტელკომი"
						,2000);
Book[9] = new BiblioTeka("ORACLE-თან მუშაობა"
                        ,"ს.ნ. სმირნოვი"
						,"სანქტ-პეტერბურგი"
						,""
						,2002);
Book[10] = new BiblioTeka("ORACLE-თან მუშაობა"
                         ,"ი.ე. ზადორევი"
						 ,"სანქტ-პეტერბურგი"
						 ,""
						 ,2002);

Book[11] = new BiblioTeka("C-ზე პროგრამირება "
                         ,"ს.ნ პოდბელსკი"
						 ,"მოსკოვი"
						 ,"ფინანსი ი სტატისტიკა"
						 ,2003);
Book[12] = new BiblioTeka("C-ზე პროგრამირება "
                         ,"ს.ს. ფომინი"
						 ,"მოსკოვი"
						 ,"ფინანსი ი სტატისტიკა"
						 ,2003);

Book[13] = new BiblioTeka("ORACLE 10g-ში შესავალი: SQL-ის საწყისები"
                         ,"ნენსი გრიინბერგი"
						 ,"NY"
						 ,""
						 ,2012);
Book[14] = new BiblioTeka("Java 2"
                         ,"პ. ნოუტონი გ. შილდტი"
						 ,"მირ"
						 ,"მოსკოვი"
						 ,2005);
Book[15] = new BiblioTeka("ვებ პროგრამირება Java და JavaScript-ზე"
                         ,"ანდრეი გარნაევი"
						 ,"მოსკოვი"
						 ,"მირ"
						 ,2004);
Book[16] = new BiblioTeka("ვებ პროგრამირება Java და JavaScript-ზე"
                         ,"სერგეი გარნაევი"
						 ,"მოსკოვი"
						 ,"მირ"
						 ,2004);

Book[17] = new BiblioTeka("JavaScript"
                         ,"პოლ უილტონი"
						 ,"სანქტ-პეტერბურგი"
						 ,""
						 ,2002);
Book[18] = new BiblioTeka("JavaScript-ის თვითმასწავლებელი"
                         ,"ბადიმ დუნაევი"
						 ,"კიევი"
						 ,"პიტერი"
						 ,2003);
Book[19] = new BiblioTeka("პროფესიონალური პროგრამირება PHP-ზე"
                         ,"ჯეზუს კასტანენტო"
						 ,"სანქტ-პეტერბურგი"
						 ,""
						 ,2004);
Book[20] = new BiblioTeka("პროფესიონალური პროგრამირება PHP-ზე"
                         ,"ხარიშ რავინი"
						 ,"სანქტ-პეტერბურგი"
						 ,""
						 ,2004);
Book[21] = new BiblioTeka("პროფესიონალური პროგრამირება PHP-ზე"
                         ,"სიმა მუტანი"
						 ,"სანქტ-პეტერბურგი"
						 ,""
						 ,2004);
Book[22] = new BiblioTeka("პროფესიონალური პროგრამირება PHP-ზე"
                         ,"კრის სკოლო"
						 ,"სანქტ-პეტერბურგი"
						 ,""
						 ,2004);
Book[23] = new BiblioTeka("პროფესიონალური პროგრამირება PHP-ზე"
                         ,"დიპაკ ველიასრი"
						 ,"სანქტ-პეტერბურგი"
						 ,""
						 ,2004);
						/*if( document.getElementById("Autor").value.length != 0 &&
						    Book[i].avtori.indexOf(document.getElementById("Autor").value) != -1)
						  {
						    Book[i].prntLn(i);
						  }
						else
						if( document.getElementById("BookName").value.length != 0 &&
						    Book[i].dasaxeleba.indexOf(document.getElementById("BookName").value) != -1)
						  {
						    Book[i].prntLn(i);
						  }
						else
						if( document.getElementById("Year").value.length != 0 &&
						    Book[i].GamocemisTseli.indexOf(document.getElementById("Year").value) != -1)
						  {
						    Book[i].prntLn(i);
						  }
						else
						if(true)
						  {
							Book[i].prntLn(i);
						  }*/
						/*Result = Result + "<tr>";
						  Result = Result + "<td>" + (i + 1) + "</td>";
						  Result = Result + "<td>" + Book[i].dasaxeleba + "</td>";    
						  Result = Result + "<td>" + Book[i].avtori + "</td>"; 
						  Result = Result + "<td>" + Book[i].GamocemisQalaqi + "</td>"; 
						  Result = Result + "<td>" + Book[i].gamomcemloba + "</td>";
						  Result = Result + "<td>" + Book[i].GamocemisTseli + "</td>"; 	  
						Result = Result + "</tr>";*/
