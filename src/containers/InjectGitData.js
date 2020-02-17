import React from "react";
import { parceDate, parceLang } from "../utils";
import $ from "jquery";

class InjectGitData extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchGitData();
    }

    fetchGitData() {
        return fetch('https://api.github.com/users/BoyPersoon/repos')
            .then(resp => resp.json())
            .then(data => {
                return data.map(function(el) {
                    el.parcedDate = parceDate(el.updated_at);
                    el.color = parceLang(el.language);
                    return el;
                });
            })
            .then( repos => {
                $("#repos").empty();
                if(typeof repos !== "undefined" && repos.length) {
                    repos.forEach((repo) => {
                        this.appendRepo(repo);
                    })
                } else {
                    $("#repos").append(`<p style="margin: auto">An unknown error has occured.</p>`);
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };

    appendRepo({name, description, language, color, html_url}) {
        $('#repos').append(`
          <div class="col-md-6 col-lg-4">
            <div class="project-card-no-image" style="border-top: 4px solid ` + color + `">
              <h3>` + name + `</h3>
              <h4>` + description + `</h4><a class="button alt small" role="button" href="#">See More</a>
              <div class="tags"><a target="_blank" href="` + html_url + `">` + language + `</a></div>
              </div>
            </div>
        `);
    }

    render() {
        return (this.props.children);
    }
}

export default InjectGitData;