import React from 'react';
import '../footer.css'
function Footer()
{
    return(
     <div className="footer">
       <div className="footerimage"></div>
       <div>
         <div className="footertext1">Support</div>
         <div className="footertext2">Whitepaper</div>
         <div className="footertext3">Team</div>
         <div className="footertext4">News</div>
       </div>
       <div>
         <div className="footertext5">About</div>
         <div className="footertext6">Docs</div>
         <div className="footertext7">FAQ</div>
         <div className="footertext8">Privacy</div>
       </div>
       <div>
         <div className="footertext9">Stay Updated</div>
       </div>
       <div>
         <div className="footericon1"></div>
         <div className="footericon2"></div>
         <div className="footericon3"></div>
         <div className="footericon4"></div>
         <div className="footericon5">
         <img src="../image/telegram.jpg" alt="icon"/>
         </div>
       </div>
       <div className="footertext10">Powered by the Binance Smart Chain</div>
     </div>
    );
}
export default Footer;