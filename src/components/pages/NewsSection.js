import React from 'react';
import './news.css'; // Create a separate CSS file for styling

const NewsSection = () => {
    const newsArticles = [
        {
            id: 1,
            imgSrc: 'https://cdn.wionews.com/sites/default/files/styles/story_page/public/2024/04/17/425699-olympic-studies-and-research-centre.png?imwidth=400',
            alt: 'RRU set up India\'s first Olympic center',
            source: 'WION',
            date: '17 April 2024',
            title: 'RRU set up India\'s first Olympic center',
            link: 'https://www.wionews.com/sports/indias-first-olympic-studies-and-research-centre-to-open-in-gujarat-712256'
        },
        {
            id: 2,
            imgSrc: 'https://www.newzdaddy.com/wp-content/uploads/2024/04/From-Vision-to-Reality-The-Inauguration-of-B-CORE-at-RRU-1.png',
            alt: 'From Vision to Reality: The Inauguration of B-CORE at RRU',
            source: 'NewzDaddy',
            date: '16 April 2024',
            title: 'From Vision to Reality: The Inauguration of B-CORE at RRU',
            link: 'https://www.newzdaddy.com/from-vision-to-reality-the-inauguration-of-b-core-at-rru/'
        },
        {
            id: 3,
            imgSrc: 'https://images.bhaskarassets.com/webp/thumb/512x0/web2images/960/2024/04/16/local-news-2022730-x-54806new96_1713274503.jpg',
            alt: 'રાષ્ટ્રીય રક્ષા યુનિવર્સિટીમાં BCORE સેન્ટર શરૂ થશે, કોઈપણ ઉંમરના વ્યક્તિ ઓલિમ્પિક પર અભ્યાસ અને રિસર્ચ કરી શકશે',
            source: 'Divya Bhaskar',
            date: '17 April 2024',
            title: 'રાષ્ટ્રીય રક્ષા યુનિવર્સિટીમાં BCORE સેન્ટર શરૂ થશે, કોઈપણ ઉંમરના વ્યક્તિ ઓલિમ્પિક પર અભ્યાસ અને રિસર્ચ કરી શકશે',
            link: 'https://www.divyabhaskar.co.in/local/gujarat/ahmedabad/news/a-bcore-center-will-be-launched-at-the-national-defense-university-where-people-of-any-age-can-study-and-research-on-the-olympics-132884787.html?utm_campaign=132884787&utm_medium=sharing'
        },
        {
            id: 4,
            imgSrc: 'https://st.adda247.com/https://currentaffairs.adda247.com/wp-content/uploads/multisite/sites/5/2024/06/26122741/Bharat-Centre-of-Olympic-Research-and-Education-launched.png',
            alt: 'Bharat Centre of Olympic Research and Education launched',
            source: 'Adda 24/7 Current Affairs',
            date: '26 June 2024',
            title: 'Bharat Centre of Olympic Research and Education launched',
            link: 'https://currentaffairs.adda247.com/bharat-centre-of-olympic-research-and-education-launched/'
        },
        {
            id: 5,
            imgSrc: 'https://images.indianexpress.com/2024/04/COLLEGE-1-1-1_d56297.jpeg?w=640',
            alt: 'Specialised centre for research, sports programmes at RRU',
            source: 'The Indian Express',
            date: '17 April 2024',
            title: 'Specialised centre for research, sports programmes at RRU',
            link: 'https://indianexpress.com/article/cities/ahmedabad/specialised-centre-for-research-sports-programmes-at-rru-9274342/'
        },
        {
            id: 6,
            imgSrc: 'https://static.pib.gov.in/WriteReadData/userfiles/image/DSC07473(1)XVCK.JPG',
            alt: 'Gujarat to have Bharat Centre for Olympic Research & Education (BCORE) at RRU, Gandhinagar',
            source: 'DeshGujarat',
            date: '22 June 2024',
            title: 'Gujarat to have Bharat Centre for Olympic Research & Education (BCORE) at RRU, Gandhinagar',
            link: 'https://deshgujarat.com/2024/06/22/gujarat-to-have-bharat-centre-for-olympic-research-education-bcore-at-rru-gandhinagar/'
        },
        {
            id: 7,
            imgSrc: 'https://images.indianexpress.com/2024/06/BECORE.jpg?w=640',
            alt: 'BCORE launched to give wings to India’s 2036 Olympic dreams',
            source: 'The Indian EXPRESS',
            date: '24 June 2024',
            title: 'BCORE launched to give wings to India’s 2036 Olympic dreams',
            link: 'https://indianexpress.com/article/cities/ahmedabad/bcore-launched-to-give-wings-to-indias-2036-olympic-dreams-9410681/'
        },
        {
            id: 8,
            imgSrc: 'https://staticg.sportskeeda.com/editor/2024/06/fc8f7-17192329134062-1920.jpg',
            alt: "IOA launches BCORE to fuel India's 2036 Olympics Dreams",
            source: 'sportskeeda',
            date: '24 June 2024',
            title: "IOA launches BCORE to fuel India's 2036 Olympics Dreams",
            link: 'https://www.sportskeeda.com/summer-olympics/news-ioa-launches-bcore-fuel-india-s-2036-olympics-dreams'
        },
        {
            id: 9,
            imgSrc: 'https://static.toiimg.com/thumb/msid-47529300,imgsize-110164,width-400,height-225,resizemode-72/47529300.jpg',
            alt: "RRU to set up India’s first Olympics study centre",
            source: 'The Times of India',
            date: '17 April 2024',
            title: "RRU to set up India’s first Olympics study centre",
            link: 'https://timesofindia.indiatimes.com/city/ahmedabad/rru-to-set-up-indias-first-olympics-study-centre/articleshow/109359576.cms'
        },
        {
            id: 10,
            imgSrc: 'https://thebridge.in/h-upload/2024/06/22/54348-untitled-design-21.webp',
            alt: "RRU to inaugurate the Bharat Centre for Olympic Research and Education",
            source: 'THE BRIDGE',
            date: '22 June 2024',
            title: "RRU to inaugurate the Bharat Centre for Olympic Research and Education",
            link: 'https://thebridge.in/olympics/rru-inaugurate-bharat-centre-for-olympic-research-47932'
        },
        {
            id: 11,
            imgSrc: 'https://static.pib.gov.in/WriteReadData/userfiles/image/L2,P4SHWB.JPG',
            alt: "Rashtriya Raksha University inaugurated Bharat Centre of Olympic Research and Education (BCORE) on International Olympic Day",
            source: 'PIB',
            date: '23 June 2024',
            title: "Rashtriya Raksha University inaugurated Bharat Centre of Olympic Research and Education (BCORE) on International Olympic Day",
            link: 'https://pib.gov.in/PressReleaseIframePage.aspx?PRID=2028130'
        },
        {
            id: 12,
            imgSrc: 'https://static.toiimg.com/thumb/msid-47529300,imgsize-110164,width-400,height-225,resizemode-72/47529300.jpg',
            alt: "Oly research centre a boost to sports in India, says Usha",
            source: 'The Times of India',
            date: '24 June 2024',
            title: "Oly research centre a boost to sports in India, says Usha",
            link: 'https://timesofindia.indiatimes.com/city/ahmedabad/bharat-centre-of-olympic-research-and-education-inaugurated-at-rashtriya-raksha-university-by-pt-usha/articleshow/111214927.cms'
        },
        {
            id: 13,
            imgSrc: 'https://static.theprint.in/wp-content/uploads/2023/06/theprint_default_image_new-696x392.jpg?compress=true&quality=80&w=800&dpr=1.3',
            alt: "Bharat Centre of Olympic Research and Education launched; momentous occasion for sports, says Usha",
            source: 'ThePrint',
            date: '23 June 2024',
            title: "Bharat Centre of Olympic Research and Education launched; momentous occasion for sports, says Usha",
            link: 'https://theprint.in/sport/bharat-centre-of-olympic-research-and-education-launched-momentous-occasion-for-sports-says-usha/2143763/'
        },
        {
            id: 14,
            imgSrc: 'https://media.ahmedabadmirror.com/am/uploads/mediaGallery/image/1719177026245.jpg-org',
            alt: "Bharat Centre Of Olympic Research & Education Launched",
            source: 'Ahmedabad Mirror',
            date: '24 June 2024',
            title: "Bharat Centre Of Olympic Research & Education Launched",
            link: 'https://www.ahmedabadmirror.com/bharat-centre-of-olympic-research--education-launched/81869774.html'
        },
        {
            id: 15,
            imgSrc: 'https://www.newsasn.com/sites/default/files/styles/article_detail/public/2024-06/425699-olympic-studies-and-research-centre.jpeg?itok=J4bP2c-p',
            alt: "India’s first Olympic Studies and Research Centre to open in Gujarat",
            source: 'news asn',
            date: '26 June 2024',
            title: "India’s first Olympic Studies and Research Centre to open in Gujarat",
            link: 'https://www.newsasn.com/node/22276'
        },
        {
            id: 16,
            imgSrc: 'https://images.cnbctv18.com/hindicnbctv18/2024/04/Olympic-research-and-education-centre-1.jpg?impolicy=website&width=550&height=300',
            alt: "गांधीनगर में बनेगा साउथ ईस्ट एशिया का पहला ओलंपिक रिसर्च एंड एजुकेशन सेंटर",
            source: 'CNBC AWAAZ',
            date: '16 April 2024',
            title: "गांधीनगर में बनेगा साउथ ईस्ट एशिया का पहला ओलंपिक रिसर्च एंड एजुकेशन सेंटर",
            link: 'https://hindi.cnbctv18.com/photos/india/south-east-asia-first-olympic-research-and-education-centre-in-gandhinagar-104939.htm'
        }
    ];
    const sortedArticles = newsArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    return (
<section className="news-section">
            <h2 className="news-title">BCORE NEWS</h2>
            <div className="news-layout">
                {/* Main news articles */}
                <div className="news-grid">
                    {sortedArticles.map((article) => (
                        <div key={article.id} className="news-card">
                            <img src={article.imgSrc} alt={article.alt} className="news-image" />
                            <div className="news-content">
                                <p className="news-source-date">
                                    {article.source} | {article.date}
                                </p>
                                <h3 className="news-headline">{article.title}</h3>
                                <a href={article.link} target="_blank" rel="noopener noreferrer" className="news-link">
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsSection;
