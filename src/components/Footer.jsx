import React from "react";
import styled from "styled-components";
import bg from '../images/footer.png'

function Footer() {
  return (
    <Wrapper  style={{ backgroundImage: `url(${bg})` }}>
      <div className="container" id="call">
        <div className="devider"></div>
        <h1 className="white-text" >Bog’lanish</h1>
        <div className="devider md"></div>
        <main className="flex align-start mobile-column">
          <form className="flex column align-stratch">
            <input type="text" placeholder="Ism, Familyangiz" />
            <input type="text" placeholder="Telefon raqamingiz" />
            <textarea name="" id="" rows="4" placeholder="Qo’shimcha ma’lumot">
              
            </textarea>
            <div className="send-btn flex">
              <button className="secondary ">Yuborish</button>
            </div>
          </form>
          <div className="list ">
            <p>
              <svg
                width="60"
                height="68"
                viewBox="0 0 60 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30 12.0487C33.9107 12.0487 37.0808 15.6418 37.0808 20.0735C37.0808 24.5057 33.9111 28.0984 30 28.0984C26.0889 28.0988 22.9192 24.5057 22.9192 20.0739C22.9192 15.6418 26.0893 12.0487 30 12.0487ZM30.9411 52.9983C58.8883 18.2882 44.4446 0.932617 30 0.932617C15.5554 0.932617 1.11172 18.2882 29.0582 52.9973C29.3083 53.3085 29.6284 53.4678 30 53.4678C30.371 53.4682 30.6917 53.3089 30.9411 52.9977V52.9983Z"
                  fill="white"
                />
              </svg>
              <span>Joylashuv: Andijon Viloyati Baliqchi tumani 1b bino</span>
            </p>
            <p>
              <svg
                width="65"
                height="65"
                viewBox="0 0 65 65"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.5 7C18.512 7 7.17599 18.336 7.17599 32.324C7.17599 46.312 18.512 57.648 32.5 57.648C46.488 57.648 57.824 46.312 57.824 32.324C57.824 18.336 46.488 7 32.5 7ZM36.2959 44.596C25.3239 39.1882 22.4639 29.464 22.0479 25.928C21.6319 22.3922 27.7681 19.272 27.7681 19.272L31.6162 25.8239C31.6162 25.8239 27.4561 28.0597 28.0281 29.256C31.096 35.7041 35.0483 38.0959 35.0483 38.0959C36.3483 38.5638 39.2084 35.3918 39.2084 35.3918L44.7203 40.5918C44.7718 40.5918 40.1438 46.4679 36.2956 44.5959L36.2959 44.596Z"
                  fill="white"
                />
              </svg>

              <span>
                Telefon raqam: <br /> +998 99 366 76 39
              </span>
            </p>
            <p>
              <svg
                width="65"
                height="58"
                viewBox="0 0 65 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M55.1683 14.1759L46.8808 48.3334C46.4909 49.9421 44.687 50.7709 43.2082 50.007L32.7265 44.5959L27.7702 52.7046C26.4217 54.9146 23.0092 53.956 23.0092 51.3719V42.3368C23.0092 41.6382 23.3015 40.9719 23.8053 40.4844L44.2321 20.9844C44.2157 20.7406 43.9557 20.5295 43.6959 20.708L19.3209 37.673L11.131 33.448C9.21373 32.4566 9.29498 29.6778 11.2772 28.8167L51.6589 11.2184C53.5926 10.3733 55.6729 12.1122 55.169 14.1758L55.1683 14.1759Z"
                  fill="white"
                />
              </svg>

              <span>
                Telegram manzil: <br />
                @IsmoilTurdaliyev
              </span>
            </p>
            <p>
              <svg
                width="53"
                height="52"
                viewBox="0 0 53 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_2_142)">
                  <path
                    d="M26.5 29.8144C28.6049 29.8144 30.3144 28.1049 30.3144 26C30.3144 23.8951 28.6049 22.1856 26.5 22.1856C24.394 22.1856 22.6856 23.8951 22.6856 26C22.6856 28.1049 24.394 29.8144 26.5 29.8144ZM34.7356 18.6437C35.8851 18.6437 36.8133 17.713 36.8133 16.5671C36.8133 15.4188 35.8847 14.4906 34.7356 14.4906C33.5894 14.4906 32.6601 15.4191 32.6601 16.5671C32.6597 17.713 33.5894 18.6437 34.7356 18.6437ZM34.1288 26.0005C34.1288 30.2135 30.713 33.6293 26.5 33.6293C22.287 33.6293 18.8712 30.2135 18.8712 26.0005C18.8712 25.1144 19.0304 24.2649 19.309 23.472H15.6212V33.8126C15.6212 35.5979 17.0826 37.0593 18.8691 37.0593H33.5906C35.376 37.0593 36.8374 35.5979 36.8374 33.8126V20.222H31.4727C33.0966 21.6217 34.1289 23.6885 34.1289 26.0005H34.1288ZM26.5 0.000488281C12.1406 0.000488281 0.499985 11.6411 0.499985 26.0005C0.499985 40.3599 12.1406 52.0005 26.5 52.0005C40.8594 52.0005 52.5 40.3599 52.5 26.0005C52.5 11.6411 40.8594 0.000488281 26.5 0.000488281ZM40.3821 36.5435C40.3821 38.9258 38.4332 40.8769 36.0487 40.8769H16.4094C14.0259 40.8769 12.0759 38.9258 12.0759 36.5435V16.9014C12.0759 14.5168 14.0259 12.568 16.4094 12.568H36.0515C38.4338 12.568 40.3849 14.5168 40.3849 16.9014V36.5435H40.3821Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_142">
                    <rect width="53" height="52.0006" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span>
                Instagram manzil: <br />
                @Ismoil.Turdaliyev.muslim
              </span>
            </p>
          </div>
        </main>
        <div className="devider md"></div>
      </div>
    </Wrapper>
  );
}

export default Footer;
const Wrapper = styled.footer`

  .white-text {
    color: #fff !important ;
  }

  main {
    gap: 80px;
    gap: 10%;
    &>*{
      flex: 0 0 50%;
    }
    form{
      flex: 0 0 40%;
    }
    input , textarea {
      margin-bottom: 25px ;
    }
    
  }

  .list {
    flex: 0 0 40px ;
    @media (max-width: 768px) {
      margin-top: 30px ;
    }
    p {
      color: #fff;
      display: flex;
      margin-bottom: 30px ;
      font-size: 24px;
      line-height: 36px;
      svg {
        flex: 0 0 50px;
        transform: translateY(8px);

        @media (max-width: 768px) {
          flex: 0 0 40px;
          transform: translateY(-8px);
        }
      }
      span {
        text-align: left;
        padding-left: 20px;
      }
      @media (max-width: 768px) {
        margin: 20px 0;
      }
    }
  }
`;
