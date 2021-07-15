import Header from "../src/components/header/header";
import Nav from "../src/components/nav/nav";
import SectionFirst from "../src/components/section-first/section-first.jsx";
import SectionSecond from "../src/components/section-second/section-second.jsx";
import SectionThird from "../src/components/section-third/section-third.jsx";
import SectionFourth from "../src/components/section-fourth/section-fourth.jsx";

export default function Home() {
  return (
    <div>
      <Header/>
      <Nav/>
      <SectionFirst/>
      <SectionSecond/>
      <SectionThird/>
      <SectionFourth/>
    </div>
  )
}
