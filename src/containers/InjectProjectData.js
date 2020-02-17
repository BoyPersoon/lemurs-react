import React from 'react';
import { assetToSrc, parseAsset, genMetaImage } from "../utils";
import $ from "jquery";
import { Link } from "react-router-dom";

const sanityUrl = "https://7s6fo221.api.sanity.io/v1/data/query/production";
const query = "?query=*%5B_type%20%3D%3D%20%22project_summary%22%5D";

class InjectProjectData extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchProjectData();
    }

    fetchProjectData() {
        return fetch(sanityUrl + query)
            .then(resp => resp.json())
            .then(data =>{
                return data? data.result.sort((a,b) => (a.order - b.order)) : null;

            })
            .then( projectSummaries => {
                let galleryMetaImage = genMetaImage("projects");

                projectSummaries.forEach((projectSummary) => {
                    this.appendProject(projectSummary, galleryMetaImage);
                })
            })
            .catch(function(error) {
                // If there is any error you will catch them here
            });
    }

    appendProject({_id, details, title, description, image}, galleryMetaImage) {
        let asset = parseAsset(image);

        if(asset){
            $('#projects').append(`
              <div class="col-md-6 col-lg-4 item zoom-on-hover">`
                    + (details? `<a href="/project/` + _id + `">` : ``) + `
                  <img class="img-fluid image" src="` + assetToSrc(asset, galleryMetaImage) + `">
                  <span class="description">
                    <hr>
                    <span class="description-heading">` + (title || "") +`</span>
                    <span class="description-body">` + (description || "") +`</span>
                  </span>
                  ` + (details? `</a>` : ``) + `
              </div>
        `);
    }
}

    render() {
        return (this.props.children);
    }
}

export default InjectProjectData;