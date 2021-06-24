import React from 'react';
import '../Body.css'

function Body()
{
    return(
      <div className="body">
          <div>
            <div className="bodytext1">IAO: Initial Ape Offerings</div>
            <div className="bodytext2">Buy new tokens by staking NAUT-LP. </div>
          </div>
         <div className="bodymid">
             <div>
                <div className="bodymidtext">"Who is the biggest boi"</div>
                <div className="bodymidtext1">Trading competition</div>
                <div className="bodymidtext2">Buy new tokens by staking NAUT-LP</div>
             </div>
         </div>
         <div>
              <div className="bodymidimg1"></div>
              <div className="bodymidimg2"></div>
              <div className="bodymidimg3"></div>
        </div>
        <div className="bodymid2">
             <button className="bodymid2btn1"><span className="bodymid2text">Swap</span></button>
             <button className="bodymid2btn2"><span className="bodymid2text">Liquidity</span></button>
             <button className="bodymid2btn3"><span className="bodymid2text">Bridge</span></button>
             
        </div>
        <div className="bodymid3">
            <div>
            <div className="bodymid3text1">Liquidity</div>
            <div className="bodymid3text2">Add liquidity to receive LP tokens</div>
            <button className="bodymid3btn"><span className="bodymid3btntext">Add Liquidity</span></button>
            </div>
            <div className="bodymid3hori"></div>
            <div>
            <div className="bodymid3text3">Your Liquidity</div>
            <div className="bodymid3text4">Connect to a wallet to view your liquidity</div>
            <div className="bodymid3text5">Don't see a pool you joined? Import it.</div>
            <div className="bodymid3text6">Or, if you staked your APE-LP tokens in a farm,</div>
            <div className="bodymid3text7">unstake them to see them here.t to view your liquidity.</div>
            </div>
       </div>
       </div>
    );
}
export default Body;