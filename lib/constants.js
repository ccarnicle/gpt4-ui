import { Document } from "langchain/document";

const title = new Document({ pageContent: "[RESUME Title] Christopher Carnicle Resume", metadata: { source: "Christopher Carnicle's Resume" } });
const section1 = new Document({ pageContent: "[RESUME SECTION 1] EXPERIENCE", metadata: { source: "Christopher Carnicle's Resume" } });
const job1 = new Document({ pageContent: `[RESUME SECTION 1: SUBSECTION - Job #5] Company: aiSports - CryptoDFS (Daily Fantasy Sports). \n Role: Technical Founder. \n Dates worked: 08/2020 to Present\n[PARAGRAPH] Responsibilities and Acheivements:
* aiSports has evolved around the central idea of improving the DFS experience through Blockchain and AI technologies.
* In mid-2020, I developed aiSports as an iOS mobile app to help automatically set NBA players on my Yahoo Fantasy Sports team. The mobile app worked, but we needed a way to receive trusted player predictions.
* I used Google Cloud’s Vertex-AI platform to create an AI algorithm that predicts FanDuel scores for each NBA player, every day. I launched a paid subscription in October 21 at the start of the NBA season.
* Because of my interest in blockchain technology, I created a demo of CryptoDFS. I took it to EthDenver and received a grant to develop a full version. After a few iterations, I’ve developed the current aiSports web app. In our first season, we launched 2000 NFTs and had 3.5k Monthly Active Users.

[Paragraph] Technologies Used
* Javascript, Node.js, Material-UI, React, Firebase (Firestore, Functions, Authentication, Analytics), Google Cloud Platform: (BigQuery, Storage, Vertex-AI), Solidity, Cadence, Stable-Diffusion`, metadata: { source: "Christopher Carnicle's Resume" } });
const job2 = new Document({ pageContent: `[RESUME SECTION 1: SUBSECTION - Job #4] Company: Scouture, Inc. \n Role: Management Consultant. \n Dates Worked: 08/2019 - 11/2022\n[PARAGRAPH] Responsibilities and Acheivements:
 * Handled all day-to-day business for Scouture, Inc. We hosted city tours for out-of-town candidates of GAP, Inc.
 * Built the Scouture website & automated business processes on Google Sheets using Google Apps Script (JavaScript).`, metadata: { source: "Christopher Carnicle's Resume" } });

const job3 = new Document({ pageContent: `[RESUME SECTION 1: SUBSECTION - Job #3] Company: LocalFriend Travel \n Role: CEO & Founder \n Dates worked:  02/2019 - 05/2020 \n [PARAGRAPH] Responsibilities and Acheivements:
 * Co-developed the LocalFriend IOS app as a tool to help travelers connect directly with locals in foreign countries. I decided to close LocalFriend after the pandemic shut down all international travel.`, metadata: { source: "Christopher Carnicle's Resume" } });

const job4 = new Document({ pageContent: `[RESUME SECTION 1: SUBSECTION = Job #2] Company: Theranos, Inc.\n Role: Global Supply Manager. \n Dates worked: 04/2013 - 12/2013\n[PARAGRAPH] Responsibilities and Acheivements:
 * Oversaw supply chain and inventory of over 500 components across 30 PCBs and 3 end products.
 * Created and maintained an organizational tool for component tracking, forecast, vendor share, and availability.
 * Reduced PCB component spend by 30% by negotiating pricing with distribution partners.`, metadata: { source: "Christopher Carnicle's Resume" } });
  
const job5 = new Document({ pageContent: `[RESUME SECTION 1: SUBSECTION = Job #1] Company: Texas Instruments, Inc (TI).\n Role: Technical Account Manager. \n Dates worked: 08/2011 - 06/2019\n[PARAGRAPH] Responsibilities and Acheivements:
* Awarded Texas Instruments High Five Winners Circle - Top 5% of US Sales Performers.
* Responsible for executing a long term business plan, supporting customers through their product lifecycle, and
accurately forecasting quarterly TI revenue for multiple customer projects.
* Consistently increased TI revenue across an account base of 4 strategic OEM customers. TI revenue from these
accounts totaled $1.5M in 2014, $5.5M in 2016 and scaled up to $38.5M in 2018.
* Coordinated TI's field application engineers, international sales teams, business unit management and distribution
partners in order to execute to plan. Negotiated pricing agreements for each of my customers
* Traveled internationally (Taipei, Taiwan) often to support key opportunities at my customer’s contract manufacturer,
engaging with world-wide teams to provide end-to-end coverage and influence at each stage of the design process.`, metadata: { source: "Christopher Carnicle's Resume" } });

const section2 = new Document({ pageContent: `[RESUME SECTION 2] PROFICIENCIES
[PARAGRAPH] Technical Experience: Java · C · Javascript · Node.js · Material-UI · React · Firebase (Firestore, Functions, Authentication, Analytics) · Google Cloud Platform: (BigQuery, Storage, Vertex-AI) · Solidity (Etherium) · Cadence (Flow) · Stable-Diffusion

[PARAGRAPH] Soft Skills: Account and Project Management · Long Term Strategic Sales Planning · Strong Communication Skills
`, metadata: { source: "Christopher Carnicle's Resume" } });

const section3 = new Document({ pageContent: `[RESUME SECTION 3] EDUCATION
[PARAGRAPH] School: University of Texas at Austin \n Degree: B.S. in Computer Engineering (08/2007 - 05/2011) 
   * Technical Areas: Computer Engineering - Embedded Systems, Sales Engineering
   * Major GPA: 3.37/4.0`, metadata: { source: "Christopher Carnicle's Resume" } });


export const exampleCoverLetter1 = new Document({ pageContent: `Christopher Carnicle's Cover Letter for the Font End Engineer Role at Ground Signal
Dear Hiring Manager,
I am excited to apply for the Front End Engineer position at Ground Signal. I bring extensive experience in full stack development, a deep understanding of React, and a passion for Sales and emerging technologies to your dynamic team.
As the Technical Founder at aiSports, I developed a mobile & desktop friendly web app using React and JavaScript, and utilized Node.js for the backend. aiSports began as a machine learning algorithm that predicted NBA player’s fantasy scores. Through the last 2 years, I’ve developed aiSports from an idea to a functioning app with over 3.5k Monthly Active users, demonstrating my ability to handle projects from inception to completion.
My experience as Technical Account Manager at Texas Instruments, where I managed $40M of business per year, gives me a unique perspective into the challenges of sales and distribution at a large scale. 
An engineering role at Ground Signal aligns perfectly with my passion and values. Your company’s commitment to emerging sales technology will allow me to make a significant positive impact on businesses across the world, all while doing what I love most - shipping products.
Best Regards, 
Chris Carnicle 
cjcarnicle.com 
`, metadata: { source: "Ground Signal Cover Letter" } });

export const exampleCoverLetter2 = new Document({ pageContent: `[Title] Christopher Carnicle's Cover Letter for the Full Stack Developer Role at Fleet Ops
[PARAGRAPH] Dear Hiring Manager,
I am excited to apply for the Full Stack Engineering position at Fleet Ops. I bring extensive experience in full stack development, a deep understanding of React, and a passion for Logistics and emerging technologies to your dynamic team.
As the Technical Founder at aiSports, I developed a mobile & desktop friendly web app using React and JavaScript, and utilized Node.js for the backend. aiSports began as a machine learning algorithm that predicted NBA player’s fantasy scores. Through the last 2 years, I’ve developed aiSports from an idea to a functioning app with over 3.5k Monthly Active users, demonstrating my ability to handle projects from inception to completion.
My experience as a Global Supply Manager at Theranos and a Technical Account Manager at Texas Instruments give me a unique perspective into the challenges of worldwide logistics at a large scale. 
An engineering role at Fleet Ops aligns perfectly with my passion and values. Your company’s commitment to emerging logistics technology will allow me to make a significant positive impact on businesses across the world, all while doing what I love most - shipping products.
Best Regards, 
Chris Carnicle 
cjcarnicle.com 
`, metadata: { source: "Fleet Ops Cover Letter" } });

export const exampleCoverLetter3 = new Document({ pageContent: `Christopher Carnicle's Cover Letter for the Full Stack Developer Role at thirdweb
Dear Hiring Manager,
As a web3 builder and a Full Stack Developer with a passion for crypto apps, I am excited to apply for the Software Engineer position at thirdweb. Having spent significant time executing and shipping products as the Technical Founder of aiSports, I am confident in my ability to contribute to thirdweb’s mission to empower web3 creators.
In my role at aiSports, I successfully built and launched a user-centric web app in the web3 Fantasy Sports ecosystem. As a technical founder I developed and built full stack systems on the Flow blockchain, while taking feedback and responding to user’s needs. The execution of my vision resulted in launching 2000 NFTs & attracting 3.5k Monthly Active Users in our first season.
thirdweb’s mission to make building in web3 incredibly easy resonates profoundly with my experience in the crypto ecosystem. Given the chance, I am eager to contribute towards building tools to help anyone build the web3 apps of their dreams.
I welcome the opportunity to further discuss how my background, skills, and enthusiasm for crypto align with this opportunity at thirdweb.
Best Regards, 
Chris Carnicle 
Cjcarnicle.com 
`, metadata: { source: "thirdweb Cover Letter" } });


export const exampleCoverLetter4 = new Document({ pageContent: `Christopher Carnicle's Cover Letter for the Full Stack Engineer Role at Numeral
Dear Hiring Manager,
I am excited to apply for the Full Stack Engineering position at Numeral. I bring extensive experience in full stack development, a deep understanding of React, and a passion for finance and emerging technologies to your dynamic team.
As the Technical Founder at aiSports, I developed a mobile & desktop friendly web app using React and JavaScript, and utilized Firebase for storage and authentication. aiSports began as a machine learning algorithm that predicted NBA player’s fantasy scores. Through the last 2 years, I’ve developed aiSports from an idea to a functioning app with over 3.5k Monthly Active users, demonstrating my ability to handle projects from inception to completion.
Most recently, I’ve worked on a micro-saas app, pdf2sheets.com. This app, while still being a work in progress, aims to convert user’s personal financial documents into Google Sheets. This app has given my insight into the complex algorithms needed to convert financial documents into usable data. 
An engineering role at Numeral aligns perfectly with my passion and values. Your company’s commitment to fin-tech will allow me to make a significant positive impact on businesses across the world, all while doing what I love most - shipping products.
Best Regards,
Chris Carnicle
cjcarnicle.com

`, metadata: { source: "numeral Cover Letter" } });

export const resumeDocs = [
  title,
  section1,
  job1,
  job2,
  job3,
  job4,
  job5,
  section2,
  section3,
  exampleCoverLetter1,
  exampleCoverLetter2, 
  exampleCoverLetter3,
  exampleCoverLetter4
]

/*
export const resumeData = `Christopher Carnicle's Resume:

      [Title] Christopher Carnicle Resume
      [SECTION 1] EXPERIENCE
  
      [SUBSECTION] Job 1: aiSports - CryptoDFS (Daily Fantasy Sports). Technical Founder (08/2020 to Present)
      [PARAGRAPH]
       * aiSports has evolved around the central idea of improving the DFS experience through Blockchain and AI technologies.
       * In mid-2020, I developed aiSports as an iOS mobile app to help automatically set NBA players on my Yahoo Fantasy Sports team. The mobile app worked, but we needed a way to receive trusted player predictions.
       * I used Google Cloud’s Vertex-AI platform to create an AI algorithm that predicts FanDuel scores for each NBA player, every day. I launched a paid subscription in October 21 at the start of the NBA season.
       * Because of my interest in blockchain technology, I created a demo of CryptoDFS. I took it to EthDenver and received a grant to develop a full version. After a few iterations, I’ve developed the current aiSports web app. In our first season, we launched 2000 NFTs and had 3.5k Monthly Active Users.
  
      [Paragraph] Technologies Used
       * Javascript, Node.js, Material-UI, React, Firebase (Firestore, Functions, Authentication, Analytics), Google Cloud Platform: (BigQuery, Storage, Vertex-AI), Solidity, Cadence, Stable-Diffusion
  
      [SUBSECTION] Job 2: Scouture, Inc. Management Consultant (08/2019 - 11/2022)
      [PARAGRAPH]
       * Handled all day-to-day business for Scouture, Inc. We hosted city tours for out-of-town candidates of GAP, Inc.
       * Built the Scouture website & automated business processes on Google Sheets using Google Apps Script (JavaScript).
  
      [SUBSECTION] LocalFriend Travel | CEO & Founder 02/2019 - 05/2020
      [PARAGRAPH]
       * Co-developed the LocalFriend IOS app as a tool to help travelers connect directly with locals in foreign countries. I decided to close LocalFriend after the pandemic shut down all international travel.
  
      [SUBSECTION] Technologies Used
       * HTML & CSS, React Native, Expo, Javascript, Node.js & Parse.
  
      [SUBSECTION] Job 3: Texas Instruments, Inc. Technical Account Manager. SF Bay Area, CA (08/2011 - 04/2013, 01/2014 - 06/2019)
      [PARAGRAPH]
       * Awarded Texas Instruments High Five Winners Circle - Top 5% of US Sales Performers.
       * Responsible for executing a long-term business plan, supporting customers through their product lifecycle, and accurately forecasting quarterly TI revenue for multiple customer projects.
       * Consistently increased TI revenue across an account base of 4 strategic OEM customers. TI revenue from these accounts totaled $1.5M in 2014, $5.5M in 2016, and scaled up to $38.5M in 2018.
       * Coordinated TI's field application engineers, international sales teams, business unit management, and distribution partners in order to execute the plan. Negotiated pricing agreements for each of my customers.
       * Traveled internationally (Taipei, Taiwan) often to support key opportunities at my customer’s contract manufacturer, engaging with world-wide teams to provide end-to-end coverage and influence at each stage of the design process.
  
      [SUBSECTION] Job 4: Theranos, Inc. Global Supply Manager. Palo Alto, CA (04/2013 - 12/2013)
      [PARAGRAPH]
       * Oversaw supply chain and inventory of over 500 components across 30 PCBs and 3 end products.
       * Created and maintained an organizational tool for component tracking, forecast, vendor share, and availability.
       * Reduced PCB component spend by 30% by negotiating pricing with distribution partners.
  
      [SECTION] PROFICIENCIES
      [PARAGRAPH]
       * Technical Experience: Java · C · Javascript · Node.js · Material-UI · React · Firebase (Firestore, Functions, Authentication, Analytics) · Google Cloud Platform: (BigQuery, Storage, Vertex-AI) · Solidity (Etherium) · Cadence (Flow) · Stable-Diffusion
  
      [PARAGRAPH]
       * Soft Skills: Account and Project Management · Long Term Strategic Sales Planning · Strong Communication Skills
  
      [SECTION] EDUCATION
      [PARAGRAPH]
       * University of Texas at Austin | B.S. in Computer Engineering (08/2007 - 05/2011)
         * Technical Areas: Computer Engineering - Embedded Systems, Sales Engineering
         * Major GPA: 3.37/4.0
    `;
  */