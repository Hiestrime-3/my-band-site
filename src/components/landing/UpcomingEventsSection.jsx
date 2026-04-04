import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock } from "lucide-react";

const events = [
  {
    date: "April 18, 2026",
    dayLabel: "Saturday 18 April 2026",
    title: "The Grand Ballroom, Beverly Hills",
    description:
      "The Replacements are back at The Grand Ballroom for an unforgettable night of live music, packed with hits across every genre. Come ready to dance!",
    time: "Show starts at 9:00pm",
  },
  {
    date: "May 10, 2026",
    dayLabel: "Sunday 10 May 2026",
    title: "Skyline Rooftop, Downtown LA",
    description:
      "An exclusive rooftop experience under the stars. We'll be bringing the energy and the soundtrack to this stunning venue high above the city.",
    time: "Show starts at 8:30pm",
  },
  {
    date: "June 6, 2026",
    dayLabel: "Saturday 6 June 2026",
    title: "Venice Beach Pavilion, LA",
    description:
      "Our summer beach party performance is back! Feel the breeze, feel the music. This one's going to be legendary.",
    time: "Show starts at 7:00pm",
  },
];

export default function UpcomingEventsSection({ heroImage }) {
  const parallaxRef = useRef(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return;
      const rect = parallaxRef.current.getBoundingClientRect();
      const scrolled = -rect.top * 0.4;
      setOffsetY(scrolled);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="events">
      {/* Parallax Header */}
      <div ref={parallaxRef} className="relative h-72 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 scale-110"
          style={{ transform: `translateY(${offsetY}px) scale(1.1)` }}
        >
          <img
            src={heroImage}
            alt="Upcoming Events"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 h-full flex items-end pb-10 px-8 md:px-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-6xl font-bold text-white uppercase tracking-widest"
          >
            Upcoming Events.
          </motion.h2>
        </div>
      </div>

      {/* Events List */}
      <div
        className="px-8 md:px-16 py-16 relative overflow-hidden"
        style={{ backgroundColor: "#6b0000" }}
      >
        {/* Splatter overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-55">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
            {/* Dense random splatter - large blobs */}
            <circle cx="43" cy="37" r="18" fill="#000"/><circle cx="63" cy="22" r="7" fill="#000"/><circle cx="29" cy="55" r="4" fill="#000"/><circle cx="71" cy="48" r="3" fill="#000"/>
            <circle cx="187" cy="14" r="12" fill="#000"/><circle cx="203" cy="28" r="5" fill="#000"/><circle cx="175" cy="30" r="2" fill="#000"/>
            <circle cx="374" cy="52" r="20" fill="#000"/><circle cx="398" cy="35" r="8" fill="#000"/><circle cx="358" cy="70" r="5" fill="#000"/><circle cx="390" cy="68" r="3" fill="#000"/><circle cx="412" cy="55" r="2" fill="#000"/>
            <circle cx="531" cy="19" r="9" fill="#000"/><circle cx="547" cy="8" r="4" fill="#000"/>
            <circle cx="689" cy="44" r="15" fill="#000"/><circle cx="710" cy="30" r="6" fill="#000"/><circle cx="673" cy="60" r="4" fill="#000"/>
            <circle cx="843" cy="22" r="11" fill="#000"/><circle cx="861" cy="11" r="4" fill="#000"/><circle cx="830" cy="38" r="3" fill="#000"/>
            <circle cx="978" cy="58" r="17" fill="#000"/><circle cx="999" cy="41" r="7" fill="#000"/><circle cx="963" cy="74" r="5" fill="#000"/><circle cx="995" cy="72" r="3" fill="#000"/>
            <circle cx="1143" cy="33" r="13" fill="#000"/><circle cx="1162" cy="19" r="5" fill="#000"/><circle cx="1128" cy="50" r="4" fill="#000"/>
            {/* Row 2 */}
            <circle cx="92" cy="118" r="14" fill="#000"/><circle cx="112" cy="104" r="5" fill="#000"/><circle cx="78" cy="134" r="3" fill="#000"/>
            <circle cx="247" cy="132" r="19" fill="#000"/><circle cx="270" cy="115" r="8" fill="#000"/><circle cx="232" cy="150" r="5" fill="#000"/><circle cx="265" cy="149" r="3" fill="#000"/>
            <circle cx="456" cy="108" r="10" fill="#000"/><circle cx="470" cy="96" r="4" fill="#000"/>
            <circle cx="612" cy="145" r="16" fill="#000"/><circle cx="634" cy="130" r="6" fill="#000"/><circle cx="596" cy="161" r="4" fill="#000"/>
            <circle cx="771" cy="120" r="12" fill="#000"/><circle cx="789" cy="108" r="5" fill="#000"/><circle cx="757" cy="136" r="3" fill="#000"/>
            <circle cx="915" cy="138" r="22" fill="#000"/><circle cx="941" cy="118" r="9" fill="#000"/><circle cx="898" cy="158" r="6" fill="#000"/><circle cx="936" cy="157" r="4" fill="#000"/>
            <circle cx="1071" cy="115" r="8" fill="#000"/><circle cx="1085" cy="104" r="3" fill="#000"/>
            <circle cx="1185" cy="147" r="14" fill="#000"/><circle cx="1199" cy="133" r="6" fill="#000"/>
            {/* Row 3 */}
            <circle cx="33" cy="213" r="16" fill="#000"/><circle cx="52" cy="198" r="6" fill="#000"/><circle cx="19" cy="229" r="4" fill="#000"/>
            <circle cx="163" cy="228" r="11" fill="#000"/><circle cx="178" cy="216" r="4" fill="#000"/>
            <circle cx="318" cy="208" r="18" fill="#000"/><circle cx="340" cy="192" r="7" fill="#000"/><circle cx="303" cy="225" r="5" fill="#000"/>
            <circle cx="499" cy="237" r="13" fill="#000"/><circle cx="516" cy="223" r="5" fill="#000"/><circle cx="484" cy="252" r="3" fill="#000"/>
            <circle cx="667" cy="215" r="9" fill="#000"/><circle cx="681" cy="204" r="3" fill="#000"/>
            <circle cx="738" cy="248" r="20" fill="#000"/><circle cx="762" cy="231" r="8" fill="#000"/><circle cx="722" cy="265" r="5" fill="#000"/><circle cx="757" cy="264" r="3" fill="#000"/>
            <circle cx="887" cy="220" r="14" fill="#000"/><circle cx="906" cy="207" r="6" fill="#000"/>
            <circle cx="1052" cy="242" r="17" fill="#000"/><circle cx="1074" cy="226" r="7" fill="#000"/><circle cx="1037" cy="259" r="4" fill="#000"/>
            <circle cx="1160" cy="218" r="10" fill="#000"/><circle cx="1175" cy="207" r="4" fill="#000"/>
            {/* Row 4 */}
            <circle cx="74" cy="305" r="21" fill="#000"/><circle cx="99" cy="287" r="9" fill="#000"/><circle cx="57" cy="324" r="6" fill="#000"/><circle cx="95" cy="323" r="4" fill="#000"/>
            <circle cx="220" cy="317" r="12" fill="#000"/><circle cx="237" cy="304" r="5" fill="#000"/>
            <circle cx="385" cy="295" r="15" fill="#000"/><circle cx="405" cy="281" r="6" fill="#000"/><circle cx="370" cy="312" r="4" fill="#000"/>
            <circle cx="547" cy="328" r="19" fill="#000"/><circle cx="570" cy="311" r="8" fill="#000"/><circle cx="531" cy="346" r="5" fill="#000"/><circle cx="566" cy="345" r="3" fill="#000"/>
            <circle cx="708" cy="302" r="11" fill="#000"/><circle cx="724" cy="291" r="4" fill="#000"/>
            <circle cx="842" cy="320" r="16" fill="#000"/><circle cx="863" cy="305" r="6" fill="#000"/><circle cx="827" cy="337" r="4" fill="#000"/>
            <circle cx="987" cy="308" r="13" fill="#000"/><circle cx="1004" cy="296" r="5" fill="#000"/>
            <circle cx="1121" cy="335" r="18" fill="#000"/><circle cx="1144" cy="318" r="7" fill="#000"/><circle cx="1106" cy="353" r="5" fill="#000"/>
            {/* Row 5 */}
            <circle cx="18" cy="402" r="13" fill="#000"/><circle cx="35" cy="389" r="5" fill="#000"/>
            <circle cx="152" cy="418" r="20" fill="#000"/><circle cx="176" cy="400" r="8" fill="#000"/><circle cx="136" cy="436" r="5" fill="#000"/><circle cx="172" cy="435" r="3" fill="#000"/>
            <circle cx="303" cy="395" r="9" fill="#000"/><circle cx="317" cy="384" r="3" fill="#000"/>
            <circle cx="461" cy="412" r="17" fill="#000"/><circle cx="483" cy="396" r="7" fill="#000"/><circle cx="446" cy="430" r="5" fill="#000"/>
            <circle cx="619" cy="428" r="14" fill="#000"/><circle cx="637" cy="415" r="5" fill="#000"/>
            <circle cx="789" cy="405" r="22" fill="#000"/><circle cx="815" cy="385" r="9" fill="#000"/><circle cx="772" cy="425" r="6" fill="#000"/><circle cx="811" cy="424" r="4" fill="#000"/>
            <circle cx="946" cy="418" r="11" fill="#000"/><circle cx="961" cy="406" r="4" fill="#000"/>
            <circle cx="1083" cy="400" r="16" fill="#000"/><circle cx="1104" cy="385" r="6" fill="#000"/>
            <circle cx="1190" cy="425" r="12" fill="#000"/><circle cx="1199" cy="413" r="5" fill="#000"/>
            {/* Row 6 */}
            <circle cx="58" cy="498" r="17" fill="#000"/><circle cx="80" cy="481" r="7" fill="#000"/><circle cx="43" cy="516" r="4" fill="#000"/>
            <circle cx="213" cy="512" r="11" fill="#000"/><circle cx="228" cy="500" r="4" fill="#000"/>
            <circle cx="347" cy="488" r="19" fill="#000"/><circle cx="370" cy="471" r="8" fill="#000"/><circle cx="331" cy="507" r="5" fill="#000"/>
            <circle cx="508" cy="505" r="14" fill="#000"/><circle cx="526" cy="492" r="6" fill="#000"/>
            <circle cx="672" cy="490" r="21" fill="#000"/><circle cx="697" cy="471" r="9" fill="#000"/><circle cx="655" cy="510" r="6" fill="#000"/><circle cx="693" cy="509" r="4" fill="#000"/>
            <circle cx="833" cy="515" r="13" fill="#000"/><circle cx="850" cy="502" r="5" fill="#000"/>
            <circle cx="983" cy="493" r="16" fill="#000"/><circle cx="1004" cy="478" r="6" fill="#000"/>
            <circle cx="1137" cy="508" r="20" fill="#000"/><circle cx="1161" cy="490" r="8" fill="#000"/><circle cx="1121" cy="527" r="5" fill="#000"/>
            {/* Row 7 */}
            <circle cx="27" cy="590" r="15" fill="#000"/><circle cx="46" cy="576" r="6" fill="#000"/>
            <circle cx="178" cy="607" r="22" fill="#000"/><circle cx="204" cy="588" r="9" fill="#000"/><circle cx="161" cy="627" r="6" fill="#000"/><circle cx="200" cy="626" r="4" fill="#000"/>
            <circle cx="339" cy="582" r="10" fill="#000"/><circle cx="353" cy="571" r="4" fill="#000"/>
            <circle cx="487" cy="600" r="18" fill="#000"/><circle cx="510" cy="583" r="7" fill="#000"/><circle cx="472" cy="618" r="5" fill="#000"/>
            <circle cx="651" cy="612" r="13" fill="#000"/><circle cx="668" cy="599" r="5" fill="#000"/>
            <circle cx="808" cy="588" r="17" fill="#000"/><circle cx="830" cy="572" r="7" fill="#000"/><circle cx="793" cy="606" r="4" fill="#000"/>
            <circle cx="962" cy="603" r="20" fill="#000"/><circle cx="986" cy="585" r="8" fill="#000"/><circle cx="946" cy="622" r="5" fill="#000"/>
            <circle cx="1105" cy="590" r="12" fill="#000"/><circle cx="1122" cy="579" r="5" fill="#000"/>
            <circle cx="1182" cy="615" r="15" fill="#000"/><circle cx="1199" cy="603" r="6" fill="#000"/>
            {/* Row 8 */}
            <circle cx="83" cy="692" r="19" fill="#000"/><circle cx="107" cy="674" r="8" fill="#000"/><circle cx="67" cy="710" r="5" fill="#000"/><circle cx="103" cy="709" r="3" fill="#000"/>
            <circle cx="248" cy="707" r="11" fill="#000"/><circle cx="263" cy="695" r="4" fill="#000"/>
            <circle cx="412" cy="683" r="16" fill="#000"/><circle cx="433" cy="668" r="6" fill="#000"/>
            <circle cx="568" cy="700" r="21" fill="#000"/><circle cx="593" cy="681" r="9" fill="#000"/><circle cx="552" cy="720" r="6" fill="#000"/><circle cx="589" cy="719" r="4" fill="#000"/>
            <circle cx="731" cy="688" r="13" fill="#000"/><circle cx="748" cy="675" r="5" fill="#000"/>
            <circle cx="882" cy="705" r="17" fill="#000"/><circle cx="904" cy="689" r="7" fill="#000"/><circle cx="867" cy="723" r="4" fill="#000"/>
            <circle cx="1038" cy="692" r="14" fill="#000"/><circle cx="1056" cy="679" r="6" fill="#000"/>
            <circle cx="1170" cy="710" r="20" fill="#000"/><circle cx="1194" cy="692" r="8" fill="#000"/>
            {/* Extra micro speckles */}
            <circle cx="135" cy="78" r="3" fill="#000"/><circle cx="321" cy="155" r="2" fill="#000"/><circle cx="489" cy="63" r="4" fill="#000"/><circle cx="602" cy="190" r="2" fill="#000"/>
            <circle cx="756" cy="75" r="3" fill="#000"/><circle cx="901" cy="170" r="2" fill="#000"/><circle cx="1030" cy="88" r="4" fill="#000"/><circle cx="1197" cy="195" r="2" fill="#000"/>
            <circle cx="48" cy="267" r="3" fill="#000"/><circle cx="272" cy="278" r="2" fill="#000"/><circle cx="430" cy="260" r="4" fill="#000"/><circle cx="593" cy="285" r="2" fill="#000"/>
            <circle cx="712" cy="270" r="3" fill="#000"/><circle cx="858" cy="275" r="2" fill="#000"/><circle cx="1011" cy="290" r="4" fill="#000"/><circle cx="1168" cy="278" r="2" fill="#000"/>
            <circle cx="125" cy="368" r="3" fill="#000"/><circle cx="280" cy="380" r="2" fill="#000"/><circle cx="435" cy="370" r="4" fill="#000"/><circle cx="590" cy="385" r="2" fill="#000"/>
            <circle cx="745" cy="375" r="3" fill="#000"/><circle cx="895" cy="362" r="2" fill="#000"/><circle cx="1050" cy="378" r="4" fill="#000"/>
            <circle cx="68" cy="462" r="3" fill="#000"/><circle cx="223" cy="472" r="2" fill="#000"/><circle cx="377" cy="462" r="4" fill="#000"/><circle cx="533" cy="475" r="2" fill="#000"/>
            <circle cx="694" cy="468" r="3" fill="#000"/><circle cx="850" cy="455" r="2" fill="#000"/><circle cx="1005" cy="470" r="4" fill="#000"/><circle cx="1158" cy="460" r="2" fill="#000"/>
            <circle cx="113" cy="558" r="3" fill="#000"/><circle cx="268" cy="568" r="2" fill="#000"/><circle cx="423" cy="558" r="4" fill="#000"/><circle cx="578" cy="572" r="2" fill="#000"/>
            <circle cx="740" cy="562" r="3" fill="#000"/><circle cx="895" cy="551" r="2" fill="#000"/><circle cx="1055" cy="565" r="4" fill="#000"/>
            <circle cx="35" cy="648" r="3" fill="#000"/><circle cx="192" cy="660" r="2" fill="#000"/><circle cx="348" cy="650" r="4" fill="#000"/><circle cx="503" cy="663" r="2" fill="#000"/>
            <circle cx="660" cy="655" r="3" fill="#000"/><circle cx="818" cy="645" r="2" fill="#000"/><circle cx="975" cy="658" r="4" fill="#000"/><circle cx="1128" cy="650" r="2" fill="#000"/>
            <circle cx="158" cy="750" r="3" fill="#000"/><circle cx="315" cy="762" r="2" fill="#000"/><circle cx="470" cy="752" r="4" fill="#000"/><circle cx="628" cy="765" r="2" fill="#000"/>
            <circle cx="783" cy="758" r="3" fill="#000"/><circle cx="940" cy="748" r="2" fill="#000"/><circle cx="1098" cy="762" r="4" fill="#000"/>
          </svg>
        </div>
        <div className="max-w-4xl mx-auto divide-y divide-white/20 relative z-10">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="py-10 first:pt-0"
            >
              <p className="font-body text-xs uppercase tracking-[0.3em] text-white/60 mb-2">
                {event.dayLabel}
              </p>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-white uppercase mb-4 leading-tight">
                {event.title}
              </h3>
              <p className="font-body text-white/80 leading-relaxed mb-3 max-w-2xl">
                {event.description}
              </p>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="w-3.5 h-3.5" />
                <span className="font-body text-sm">{event.time}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
