import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-900 text-white font-bold p-3 pt-4 md:px-16 md:py-12 md:flex md:flex-col md:items-center lg:px-96">
        <div className="flex flex-col gap-3 mb-4 self-start">
          <h4>How to Shop</h4>
          <h4>Customer Services</h4>
          <h4>Legal Notices</h4>
          <h4>About Us</h4>
        </div>
        <div className="bg-blue-600 p-3 rounded mb-4 md:w-1/3">
          <h3 className="text-lg text-yellow-400 drop-shadow-lg">Feedback</h3>
          <h6 className="text-xs font-normal text-slate-300 mt-1">
            Your comments help us improve our website
          </h6>
          <h4 className="text-sm mt-1">Send us your feedback</h4>
        </div>
        <div className="flex flex-col items-center py-2">
          <h4 className="text-sm text-slate-300">Follow Us</h4>
          <div className="flex gap-3 my-2">
            <Image
              src="/facebook.svg"
              height="30"
              width="30"
              alt="facebook icon"
            />
            <Image
              src="/x.svg"
              height="30"
              width="30"
              alt="x, formerly twitter, icon"
            />
          </div>
        </div>
        <div className="text-center bg-blue-900 text-slate-300 text-xs">
          <h4 className="font-bold mb-3">
            PayPal Credit REPRESENTATIVE EXAMPLE: PURCHASE RATE 23.9% P.A.
            (VARIABLE) | REPRESENTATIVE 23.9% APR (VARIABLE) | ASSUMED CREDIT
            LIMIT £1,200
          </h4>
          <h6 className="font-normal mb-5">
            PayPal Credit and PayPal Pay in 3 are trading names of PayPal
            (Europe) S.à r.l. et Cie, S.C.A. 22-24 Boulevard Royal L-2449,
            Luxembourg. PayPal Credit: Terms and conditions apply. Credit
            subject to status, UK residents only, Euro Car Parts Limited acts as
            a broker and offers finance from PayPal Credit.PayPal Pay in 3:
            PayPal Pay in 3 is not regulated by the Financial Conduct Authority.
            Pay in 3 eligibility is subject to status and approval. 18+. UK
            residents only. Pay in 3 is a form of credit, may not be suitable
            for everyone. Use may affect your credit score or make credit less
            accessible or more expensive for you. Consider if affordable for
            you. See product terms for more details.
          </h6>
          <h4 className="mb-2">An LKQ Company</h4>
          <h6 className="font-normal">
            Copyright © 2023. Car Company Limited. All Rights Reserved.
            Registered in England and Wales, Company Number 2******2, our VAT
            registration is 7*******9
          </h6>
        </div>
      </div>
    </>
  );
};

export default Footer;
