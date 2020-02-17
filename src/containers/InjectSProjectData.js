import React from 'react';
import { parceDate, assetToSrc, genMetaImage, parseAsset } from "../utils";
import $ from "jquery";

import { withRouter } from "react-router";

const sanityUrl = "https://7s6fo221.api.sanity.io/v1/data/query/production";
const queryDetail = (id) =>  ("?query=*%5B_type%20%3D%3D%20%22project_summary%22%20%26%26%20_id%20%3D%3D%20%22" + id + "%22%5D");

class InjectSProjectData extends React.Component {

    constructor(props) {
        super(props);
        // let { id } = useParams();
        // console.log(id);
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.fetchProjectData(id);
    }

    fetchProjectData(projectId) {
         return fetch(sanityUrl + queryDetail(projectId))
            .then(resp => resp.json())
            .then(data => {
                if (typeof data !== 'undefined' && data.result && data.result.length) {
                let projectData = data.result[0];

                this.populatePage(projectData);
            }
            })
            .catch(function(error) {
                // If there is any error you will catch them here
                console.log(error);
            });
    };

    populatePage(project) {
        const $page = $("section.project");

        this.populateText($page, project);
        this.populateGallery($page, project);
        this.populateTags($page, project);
    };

    populateTags($page, {status, _updatedAt, tags}) {
        let $meta = $page.find("#meta");

        $meta.find("span.status").text(status);
        $meta.find("span.date").text(parceDate(_updatedAt));

        if(typeof tags !=="undefined" && tags.length()){

        } else {

        }
    };

    populateText($page, {title, description}) {
        $page.find(".heading h2").text(title);

        $page.find(".info").empty();
        $page.find(".info").append("<h3>Description</h3>");
        $page.find(".info").append(description);
    }

    populateGallery($page, {image, slideshow}) {
        let $imageDiv = $page.find(".image");
        let $sidebarGallery = $page.find(".project-sidebar-gallery");
        let galleryMetaImage = genMetaImage("projectDetail");

        let mainSrc = assetToSrc(parseAsset(image), galleryMetaImage);
        $imageDiv.css({"background-image": "url(" + mainSrc + ")"});

        if(typeof slideshow !== "undefined" && slideshow.length) {
            $sidebarGallery.empty();
            slideshow = slideshow.slice(0, 3); // max length of three
            slideshow.forEach((sideImg) => {

                let src = assetToSrc(parseAsset(sideImg), galleryMetaImage);
                let $sideImgEl = $(this.genGalleryImg(src));

                console.log(src, $sideImgEl);

                $sidebarGallery.append($sideImgEl);

                $sideImgEl.hover(() => {
                    $imageDiv.fadeTo('fast', 0.1, () => {
                        $imageDiv.css({"background-image": "url(" + src + ")"});
                    }).fadeTo('slow', 1);
                }, () => {
                    $imageDiv.css({"background-image": "url(" + mainSrc + ")"});
                })
            });
        } else {
            $(".project-sidebar-gallery").remove();
            $(".project-main-img").addClass("col-lg-12");
            $(".project-main-img").removeClass("col-lg-9");
        }
    }

    genGalleryImg(src) {
        return `<div class="bg-image img-block"><img class="project-side-img" src="${src}"></div>`;
    }

    render() {
        return (this.props.children);
    }
}

export default withRouter(InjectSProjectData);