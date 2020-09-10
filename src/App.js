import React from 'react';
import Page from './components/Page.jsx';
import './App.css'
import ContentPart from './components/ContentPart.jsx';
import Sidebar from './components/Sidebar.jsx';
import Main from './components/Main.jsx';
import SidebarSection from './components/SidebarSection.jsx';
import RecordWithIcon from './components/RecordWithIcon.jsx';
import user from './img/assets/user.png'
import msg from './img/assets/msg.png'
import gps from './img/assets/gps.png'
import phone from './img/assets/phone.png'
import RecordWithSkill from './components/RecordWithSkill.jsx';
import RecordWithCert from './components/RecordWithCert.jsx';
import Hobbys from './components/Hobbys.jsx';
import Clause from './components/Clause.jsx';

const DATA = {
  personalData: { name: "Michał Skorus", position: "Front End Developer", birth: "08.05.1998", email: "mskorus.biznes@gmail.com", phone: "+48 600 707 828", live: "Katowice, Tysiąclecie" },
  projects: [
    {
      project: "Serwis do wspólnego zamawiania obiadów", role: "Front-End", description: [`Projekt organizowany w ramach praktyk zdalnych przez firmę Euvic.
    Wykorzystane umiejętności: React, SCSS (styled-components), współpraca z Java Spring API, PWA, gitflow, CI/CD, Firebase Notifications, Heroku, npm.`], dateStart: "2020-08", dateEnd: "2020-08", link: "https://teamfood-env-production.herokuapp.com/"
    },
    {
      project: "Hermoso - Sklep internetowy", role: "Front-End", description: [`Projekt sklepu internetowego z ubraniami dla kobiet.
    Wykorzystane umiejętności: HTML5, CSS, React, JavaScript, SQL, UX/UI design, współpraca z Django API, npm.`], dateStart: "2020-02", dateEnd: "2020-06", link: "https://www.hermoso-butik.pl/"
    },
    {
      project: "Recruitment System", role: "Front-End, UX/UI Design", description: [`Projekt witryny internetowej rejestrującej aplikantów na stanowiska firmy klienta w wersji na przeglądarki mobilne.
    Wykorzystane umiejętności: HTML5, SCSS, JavaScript, SQL, UX/UI design, współpraca z PHP, npm.`], dateStart: "2019-10", dateEnd: "2020-02"
    },
    {
      project: "RollerBlog", role: "", description: [`Samodzielny projekt witryny poświęconej mojej pasji do rolek. Na stronie znajduje się 36 zdjęć, 3 filmy (5-minutowe), 3 pliki audio (5-minutowe) oraz kanały RSS. Głównych założeniem projektu było, aby strona na serwerze zajmowała MAX 120MB.
    Wykorzystane umiejętności: HTML5, CSS, Photoshop, XML, obróbka i kompresja plików multimedialnych.`], dateStart: "2019-03", dateEnd: "2019-09"
    },
    {
      project: "jakiekieszonkowe.pl", role: "Front-End", description: [`Projekt witryny internetowej, która liczy średnie kieszonkowe grupując po szkołach, województwach, ilości dzieci.
    Wykorzystane umiejętności: HTML5, CSS, JavaScript, SQL, współpraca z PHP, npm.`], dateStart: "2019-03", dateEnd: "2019-09"
    },
  ],
  experience: [
    { employer: "KluboGaleria SARP,", address: "ul. Dyrekcyjna 9, 40-013 Katowice", position: "Kelner/Selekcjoner/Szatniarz", responsibilities: ["zapewnienie doskonałej i przyjaznej obsługi gościom", "robienie podstawowych drinków/napojów, parzenie kawy, nalewanie piwa, bar-back", "kulturalne selekcjonowanie gości na wejściu", "zapewnienie porządnej i szybkiej obsługi na szatni"], dateStart: "2017-06", dateEnd: "2020-06", link: "https://www.facebook.com/klubogaleriasarp" },
    { employer: "Korepetycje matematyki", address: "", position: "Korepetytor", responsibilities: ["Udzielanie korepetycji z matematyki na poziomie szkoły średniej"], dateStart: "2016-09", dateEnd: "2018-05" }
  ],
  education: [
    { school: "Politechnika Śląska,", faculty: "wydział AEiI, Gliwice", specjalization: "Teleinformatyka", dateStart: "2017-10", dateEnd: "do dziś", link: "https://www.polsl.pl/wydzialy/rau/Strony/Witamy.aspx" },
    { school: "Uniwersyteckie I Liceum Ogólnokształcące im. Juliusza Słowackiego w Chorzowie", faculty: "", specjalization: "matematyczno-informatyczno-fizyczna", dateStart: "2014-09", dateEnd: "2017-06", link: "https://slowacki.edu.pl/" },
  ],
  skills: [
    { skill: "Programowanie JavaScript/React", progressBar: [5, "ES11, React"] },
    { skill: "Frontend HTML5/CSS", progressBar: [4, "Poziom średni"] },
    { skill: "Projektowanie relacyjnych DB, SQL", progressBar: [4, "Poziom średni"] },
    { skill: "Programowanie Python/Django", progressBar: [2, "REST API"] },
    { skill: "Programowanie C/C++", progressBar: [4, "Obiektowo/strukturalnie"] },
    { skill: "Adobe Photoshop/Adobe Xd – UX/UI Design, obrabianie zdjęć", progressBar: false },
    { skill: "Obsługa Pakietu Microsoft Office/Google Docs", progressBar: false },
    { skill: "Czyste prawo jazdy kategorii B", progressBar: false },
    { skill: "PWA, NodeJS, Github, gitflow, npm, HTTP/HTTPS, Scrum, Unix, SCSS/SASS, Heroku", progressBar: false }
  ],
  languages: [
    { language: "Angielski", progressBar: [5, "B2/C1"] },
    { language: "Niemiecki", progressBar: [1, "Podstawy"] }
  ],
  certificates: [
    { certificate: "Google Internetowe Rewolucje „Podstawy marketingu internetowego”" },
    { certificate: "„JavaScript Bible 2019” 42,5 hour online course" }
  ],
  hobbys: [
    "Freestyle Slalom Skating",
    "Grafika komputerowa",
    "Koszykówka",
    "Matematyka",
    "Filmy Science Fiction",
    "Kryptowaluty",
    "Ekonomia"
  ]
}

function App() {
  return (
    <div className="App">
      <Page>
        <Main data={DATA} firstPage={true}>
          <ContentPart title={"PROJEKTY"} data={DATA.projects} />
          <ContentPart title={"EDUKACJA"} data={DATA.education} />
        </Main>
        <Sidebar data={DATA} firstPage={true}>
          <SidebarSection title={"DANE OSOBOWE"}>
            <RecordWithIcon path={user} data={DATA.personalData.birth} />
            <RecordWithIcon path={msg} data={DATA.personalData.email} />
            <RecordWithIcon path={phone} data={DATA.personalData.phone} />
            <RecordWithIcon path={gps} data={DATA.personalData.live} />
          </SidebarSection>
          <SidebarSection title={"UMIEJĘTNOŚCI"}>
            {DATA.skills.map(skill => <RecordWithSkill data={skill} title={"UMIEJĘTNOŚCI"} />)}
          </SidebarSection>
          <SidebarSection title={"CERTYFIKATY"}>
            {DATA.certificates.map(cert => <RecordWithCert data={cert} title={"CERTYFIKATY"} />)}
          </SidebarSection>
        </Sidebar>
      </Page>
      <Page>
        <Main data={DATA} firstPage={false}>
          <ContentPart title={"DOŚWIADCZENIE"} data={DATA.experience} />
          <Hobbys title={"ZAINTERESOWANIA"} data={DATA.hobbys} />
          <Clause />
        </Main>
        <Sidebar data={DATA} firstPage={false}>
          <SidebarSection title={"JĘZYKI OBCE"}>
            {DATA.languages.map(lang => <RecordWithSkill data={lang} title={"JĘZYKI OBCE"} />)}
          </SidebarSection>
        </Sidebar>
      </Page>
    </div>
  );
}

export default App;
