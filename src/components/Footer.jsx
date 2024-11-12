function Footer() {
  return (
    <footer className="bg-secondary gap-14 pt-14 pb-2 pl-4 flex flex-col justify-center">
      <div className="flex gap-60 text-primary">
        <div>
          <h5 className="uppercase font-bold font-noto text-sm">
            Shoply Goods
          </h5>
          <ul className="font-noto text-sm cursor-pointer">
            <li>About</li>
            <li>Contact</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase text-sm font-bold font-noto">Help</h5>
          <ul className="font-noto text-sm cursor-pointer">
            <li>FAQ</li>
            <li>Track order</li>
            <li>Return and refund policy</li>
          </ul>
        </div>
        <div>
          <h5 className="uppercase font-bold font-noto text-sm">Legacy</h5>
          <ul className="font-noto text-sm cursor-pointer">
            <li>Privacy and cookies</li>
            <li>Terms and conditions</li>
            <li>Cookie settings</li>
          </ul>
        </div>
      </div>
      <div class=" text-primary">@Shoply Goods</div>
    </footer>
  );
}

export default Footer;
