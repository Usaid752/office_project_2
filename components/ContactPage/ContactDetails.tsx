const contactDetails = [
  {
    title: "Address",
    lines: ["254 Chapman Rd, Ste 208 #21645,", "Newark, Delaware 19702, US"],
  },
  { title: "E-mail", lines: ["info@dukaandar.com"] },
  { title: "Phone Number", lines: ["+1 302 366 4887"] },
  { title: "Open Hours", lines: ["Monday - Friday", "9.00 am - 5.00 pm"] },
];

export default function ContactDetails() {
  return (
    <div className="space-y-7 ">
      {contactDetails.map((item) => (
        <div key={item.title}>
          <p className="mb-1 text-sm text-[#B3E56C]">{item.title}</p>
          {item.lines.map((line) => (
            <p key={line} className="text-[25px] font-medium leading-[1.35]">
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}
