function Footer() {
  return (
    <footer className="bg-secondary gap-14 pt-14 pb-2 pl-4 flex flex-col justify-center mt-5">
      <div className="md:flex-row md:gap-60 text-primary flex flex-col gap-4">
        <div className="after:-[''] relative  after:bottom-0 after:left-0 after:w-1/3 after:h-px after:mt-5 after:bg-primary after:block md:after:hidden">
          <h5 className="uppercase font-bold font-noto text-sm">
            Shoply Goods
          </h5>
          <ul className="font-noto text-sm cursor-pointer ">
            <li>About</li>
            <li>Contact</li>
            <li>Newsletter</li>
          </ul>
        </div>
        <div className="after:-[''] relative  after:w-1/3 after:h-px after:mt-5 after:bg-primary after:block md:after:hidden">
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
