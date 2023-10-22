import "../../../css/EachBlogCard.css";
import { useParams } from "react-router-dom";
import midSectionImage from "../../../assets/BlogPage/1.jpeg";
import Footer from "../../Footer";
import AllBlog_data from "../../../JSON/AllBlogContents.json";

import { useMemo, useState } from "react";

function EachBlogCard() {
    const { item } = useParams();
    const [mainData, setMainData] = useState([]);

    useMemo(() => {
        setMainData(AllBlog_data);
    }, []);

    return (
        <div className="eachcardwrapper">
            {mainData.length > 0 && (
                <div key={mainData[0].id}>
                    <header>
                        <img
                            src={`/src/assets/BlogPage/BlogCards_Images/${item}.jpeg`}
                            alt=""
                        />
                        <div className="content">
                            <h1>{mainData[0].title}</h1>
                            <p>{mainData[0].description}</p>
                        </div>
                    </header>
                    <div className="storyContent">
                        <div className="topsectionText">
                            <div className="title">
                                <h3>Top Heading</h3>
                            </div>
                            <article className="topSectionArticle">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sed sequi dolorum vel, hic
                                modi, nihil reprehenderit ipsam magnam harum
                                animi minima laborum itaque dolore nulla ducimus
                                temporibus corrupti facere, non quae ex autem
                                commodi ullam cupiditate? Quia, iusto
                                perspiciatis eaque mollitia fuga eveniet
                                deserunt! Omnis velit dolor accusamus! Quae
                                corporis cupiditate nostrum labore aliquid
                                repellat cum, maiores, aperiam dicta dignissimos
                                delectus impedit, et autem rerum amet omnis
                                dolorum vitae culpa dolores nobis itaque?
                                Similique, ea minima sunt itaque quos commodi
                                voluptas fugit esse necessitatibus labore dolore
                                delectus nostrum ab fugiat? Ducimus quibusdam id
                                eligendi, corporis mollitia adipisci in impedit
                                illo nesciunt recusandae amet reiciendis officia
                                quidem facere voluptate delectus architecto.
                                Totam dolorem architecto eum praesentium nobis
                                ab adipisci officia aspernatur velit! Voluptas,
                                minus at. Amet natus, omnis iusto quibusdam nisi
                                enim magni! Sequi beatae ipsum perspiciatis
                                quae. Laborum commodi expedita delectus dolores
                                ullam alias natus, facilis odit quia officiis
                                assumenda!
                            </article>
                        </div>
                        <div className="imageAndText">
                            <div className="imageDiv">
                                <figcaption>
                                    <img
                                        src={midSectionImage}
                                        alt="Story image"
                                    />
                                    <cite>Waste Collection Track</cite>
                                </figcaption>
                            </div>
                            <div className="imageSideText">
                                <div className="imageTextHeader">
                                    <h3>Image Text Header</h3>
                                </div>
                                <article className="imageTextArticle">
                                    Lorem, ipsum dolor sit amet consectetur
                                    adipisicing elit. Odio libero voluptatum
                                    rerum repudiandae, ipsum culpa, natus esse
                                    officiis voluptate recusandae voluptatibus
                                    distinctio numquam consequuntur debitis ad
                                    aliquam tenetur fugiat! Pariatur
                                    reprehenderit cupiditate consequatur quas
                                    sed labore explicabo illo. Optio deleniti
                                    necessitatibus rerum voluptas, ducimus,
                                    porro aliquam minus hic consectetur a dolore
                                    minima in? Et perspiciatis possimus quam
                                    tempore voluptas impedit, quisquam sapiente
                                    nemo quidem animi eveniet ut id assumenda ea
                                    incidunt temporibus, eum odio distinctio
                                    suscipit odit tempora consequuntur.
                                    Veritatis natus veniam incidunt a, at ipsum
                                    quam, libero, dolor quas distinctio dicta
                                    voluptatibus accusantium cumque repudiandae
                                    officiis nihil. Voluptatum reprehenderit
                                    doloribus beatae porro eligendi dolore
                                    dolorem. Cupiditate sit fuga quisquam
                                    magnam. Quis quibusdam eligendi officiis
                                    voluptas maxime vero a odio fuga enim, natus
                                    praesentium accusamus porro doloribus
                                    dolores numquam blanditiis consectetur
                                    deleniti? Optio veritatis ea culpa.
                                    Blanditiis, provident. Deserunt, ratione
                                    saepe ipsum delectus doloribus sit
                                    voluptates in iste mollitia velit esse totam
                                    reprehenderit similique aliquid soluta.
                                    Odit, hic suscipit. Quibusdam rerum porro
                                    quis molestias tempore nostrum quos nihil
                                    nemo illum ut nulla minima, ex, deserunt
                                    veritatis animi atque, soluta sequi quidem
                                    sit minus iste quo dignissimos? Perspiciatis
                                    molestias iste nulla soluta unde debitis,
                                    distinctio expedita qui dolorem doloremque
                                    dolore ad.
                                </article>
                            </div>
                        </div>
                        <div className="bottomsectionText">
                            <div className="bottomTextHeader">
                                <h3>Bottom Header</h3>
                            </div>
                            <article>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Molestias blanditiis
                                voluptatem, quae modi vitae consequatur corporis
                                dolorum ratione saepe alias laudantium
                                voluptatibus neque ullam veniam quasi dolorem
                                sint doloremque? Veritatis delectus facere
                                aliquam ad pariatur, ex iusto ut fuga adipisci
                                molestiae mollitia suscipit molestias, dolorem
                                laudantium nulla necessitatibus aut accusantium?
                                Animi quos ex, eveniet porro aliquam sint. Vel
                                neque quia mollitia corporis, nesciunt ex,
                                deleniti minus cumque repellat impedit id?
                                Numquam ullam obcaecati commodi autem nemo,
                                accusantium quis repudiandae ea. Ratione nostrum
                                dolor laboriosam, totam qui necessitatibus.
                                Doloribus, exercitationem! At laborum
                                praesentium nihil nostrum voluptates, autem
                                necessitatibus maiores, placeat quis voluptatum
                                quam voluptas odio eligendi iusto? Qui
                                repudiandae tempora voluptate cum voluptatibus
                                ipsum assumenda reiciendis sapiente officia
                                necessitatibus quos minus excepturi, eum harum!
                                Veritatis, veniam ab sequi harum debitis
                                praesentium sed laboriosam unde exercitationem
                                eveniet neque nostrum animi vitae voluptatem
                                rerum atque dolorem autem repudiandae provident?
                                Iste mollitia hic, odio eius aut consequuntur
                                perferendis. Dolore temporibus rem ex blanditiis
                                aperiam perferendis ab similique aspernatur
                                totam dolorum vitae necessitatibus unde esse
                                laborum molestiae distinctio, illum itaque
                                asperiores assumenda quam accusantium natus
                                voluptatum reprehenderit. Illum autem rerum
                                laudantium iusto facere repudiandae delectus
                                itaque vero a rem iure consequatur earum tenetur
                                ducimus sunt provident quo, cumque assumenda
                                ullam molestiae? Sunt quia minima ad, ut dolorum
                                autem necessitatibus. Beatae voluptatum,
                                accusantium ullam quisquam officiis recusandae
                                iure exercitationem nobis voluptatibus quasi
                                vero illo, dolorum perspiciatis neque fugiat et
                                ipsum, eius enim maxime nemo rem tenetur
                                reprehenderit? Alias ducimus pariatur quas dolor
                                facilis ipsam consequatur quam quod nam a,
                                architecto ex autem officiis ipsum inventore,
                                iste rerum, cumque molestiae omnis qui mollitia
                                itaque velit asperiores? Excepturi, error ex
                                amet asperiores quas delectus labore deleniti
                                soluta minus unde non dolorem repellat quidem
                                nemo facilis veniam nulla vero reprehenderit
                                dicta voluptates assumenda qui optio
                                voluptatibus mollitia! Quae, aperiam?
                            </article>
                        </div>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
}

export default EachBlogCard;
