import styles from '../components/FeaturedProjects.module.css'

export default function FeaturedProjects() {
    return (
        <section className={styles["featured-project-section"]}>
            <div className={styles["section-wrapper"]}>
                <div className={styles["generic-section-header"]}>
                    <span className={styles["eyebrow"]}>Featured Work</span>
                    <h2>Projects that solved a real problem</h2>
                    <p>Each of these started as a business need, not a design brief. Here's what the site had to do - and what to make it happen.</p>
                </div>
                <div className={styles["element-carousel"]}>
                    <a href='#' className={styles["project-element"]}>
                        <div className={styles["project-image"]}>
                            <div className={styles['project-image-wrapper']}>
                                <span>Category</span>
                                <span>Category</span>
                                <span>Category</span>
                            </div>
                        </div>
                        <div className={styles["project-content-con"]}>
                            <div className={styles["project-title-con"]}>
                                <p>Project Title</p>
                                <p>Project Type</p>
                            </div>
                            <div className={styles["project-content"]}>
                                <div>
                                    <p className={styles["project-subtitle"]}>Project subtitle</p>
                                    <p className={styles["project-details"]}>Project details Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum cum omnis consectetur? Doloribus rem aut nam. Veniam nesciunt provident error, sapiente voluptatum in itaque culpa excepturi sequi minus deleniti aliquid.</p>
                                </div>
                                <div className={styles["project-cta-con"]}>
                                    <p>Project CTA</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href='#' className={styles["project-element"]}>
                        <div className={styles["project-image"]}>
                            <div className={styles['project-image-wrapper']}>
                                <span>Category</span>
                                <span>Category</span>
                                <span>Category</span>
                            </div>
                        </div>
                        <div className={styles["project-content-con"]}>
                            <div className={styles["project-title-con"]}>
                                <p>Project Title</p>
                                <p>Project Type</p>
                            </div>
                            <div className={styles["project-content"]}>
                                <div>
                                    <p className={styles["project-subtitle"]}>Project subtitle</p>
                                    <p className={styles["project-details"]}>Project details Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum cum omnis consectetur? Doloribus rem aut nam. Veniam nesciunt provident error, sapiente voluptatum in itaque culpa excepturi sequi minus deleniti aliquid.</p>
                                </div>
                                <div className={styles["project-cta-con"]}>
                                    <p>Project CTA</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href='#' className={styles["project-element"]}>
                        <div className={styles["project-image"]}>
                            <div className={styles['project-image-wrapper']}>
                                <span>Category</span>
                                <span>Category</span>
                                <span>Category</span>
                            </div>
                        </div>
                        <div className={styles["project-content-con"]}>
                            <div className={styles["project-title-con"]}>
                                <p>Project Title</p>
                                <p>Project Type</p>
                            </div>
                            <div className={styles["project-content"]}>
                                <div>
                                    <p className={styles["project-subtitle"]}>Project subtitle</p>
                                    <p className={styles["project-details"]}>Project details Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum cum omnis consectetur? Doloribus rem aut nam. Veniam nesciunt provident error, sapiente voluptatum in itaque culpa excepturi sequi minus deleniti aliquid.</p>
                                </div>
                                <div className={styles["project-cta-con"]}>
                                    <p>Project CTA</p>
                                </div>
                            </div>
                        </div>
                    </a>
                    <a href='#' className={styles["project-element"]}>
                        <div className={styles["project-image"]}>
                            <div className={styles['project-image-wrapper']}>
                                <span>Category</span>
                                <span>Category</span>
                                <span>Category</span>
                            </div>
                        </div>
                        <div className={styles["project-content-con"]}>
                            <div className={styles["project-title-con"]}>
                                <p>Project Title</p>
                                <p>Project Type</p>
                            </div>
                            <div className={styles["project-content"]}>
                                <div>
                                    <p className={styles["project-subtitle"]}>Project subtitle</p>
                                    <p className={styles["project-details"]}>Project details Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum cum omnis consectetur? Doloribus rem aut nam. Veniam nesciunt provident error, sapiente voluptatum in itaque culpa excepturi sequi minus deleniti aliquid.</p>
                                </div>
                                <div className={styles["project-cta-con"]}>
                                    <p>Project CTA</p>
                                </div>
                            </div>
                        </div>
                    </a>

                </div>
                <div className={styles['button-cta-con']}>
                    <a href='#'><button>View All Work</button></a>
                </div>
            </div>
        </section>
    )
}