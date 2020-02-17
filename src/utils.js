import $ from "jquery";

const parceLang = (language) => {
    switch (language) {
        case 'JavaScript':
            return '#F1E05A';
        case 'CSS':
            return '#563D7C';
        case 'HTML':
            return '#E34C26';
        default:
            return '#777';
    }
};

const parceDate = (gitDate) => {
    let date = new Date(gitDate);
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
};

const genMetaImage = (type) => ({
    root: "https://cdn.sanity.io/images/7s6fo221/production/",
    dimension: "1395x931",
    extension: ".jpg",
    params: genImageParams(type)
});

/**
 *
 * @param type of img slot that needs to be filled
 * @returns {string} query params for sanity asset
 */
const genImageParams = (type) => {
    let imgProps;

    switch (type) {
        case "projects":
            imgProps = getProjectsDimensions();
            break;
        case "projectDetail":
            imgProps = getProjectDetailDimensions();
            break;
        case "otherProjects":
            imgProps = getOtherProjectsDimensions();
            break;
        default:
            imgProps = getProjectsDimensions();
    }

    let {imgWidth, pixelDensity, aspectRatio} = imgProps;
    let height = Math.round((imgWidth / aspectRatio) * pixelDensity);
    let width = Math.round(imgWidth * pixelDensity);

    return `?h=${height}&w=${width}&fit=min&q=85`;
};

/**
 * returns dimensions for gallery images depending on window width.
 * @Return Object{ float width, float pixelDensity, float aspectRatio  }
 */
const getProjectsDimensions = () => {
    let imgWidth = 0;
    let screenWidth = $(window).width();
    let pixelDensity = 1.5;
    let aspectRatio = 1.5;

    switch (true) {
        case screenWidth >= 2500:
            imgWidth = (2500 / 3);
            pixelDensity = 2;
            break;
        case screenWidth >= 1920:
            imgWidth = (1920 / 3);
            pixelDensity = 2;
            break;
        case screenWidth >= 1024:
            imgWidth = (1024 / 3);
            break;
        case screenWidth >= 780:
            imgWidth = (780 / 2);
            break;
        case screenWidth < 780:
            imgWidth = 780;
            pixelDensity = 1;
            break;
        default:
            imgWidth = (1024 / 3);
    }

    return {
        imgWidth,
        pixelDensity,
        aspectRatio
    };
};

/**
 * returns dimensions for gallery images depending on window width.
 * @Return Object{ float width, float pixelDensity, float aspectRatio  }
 */
const getOtherProjectsDimensions = () => {
    let imgWidth = 0;
    let screenWidth = $(window).width();
    let pixelDensity = 1.5;
    let aspectRatio = 1.5;

    switch (true) {
        case screenWidth >= 1440:
            imgWidth = 255;
            pixelDensity = 2;
            break;
        case screenWidth >= 1024:
            imgWidth = 210;
            pixelDensity = 1.5;
            break;
        case screenWidth >= 768:
            imgWidth = 209;
            pixelDensity = 1;
            break;
        case screenWidth < 780:
            imgWidth = 510;
            pixelDensity = 1;
            break;
        default:
            imgWidth = 255;
    }

    return {
        imgWidth,
        pixelDensity,
        aspectRatio
    };
};

/**
 * returns dimensions for gallery images depending on window width.
 * @Return Object{ float width, float pixelDensity, float aspectRatio  }
 */
const getProjectDetailDimensions = () => {
    let imgWidth = 0;
    let screenWidth = $(window).width();
    let pixelDensity = 1.5;
    let aspectRatio = 1.5;

    switch (true) {
        case screenWidth >= 2500:
            imgWidth = 1140;
            pixelDensity = 2;
            break;
        case screenWidth >= 1440:
            imgWidth = 1140;
            pixelDensity = 2;
            break;
        case screenWidth >= 1024:
            imgWidth = 960;
            break;
        case screenWidth >= 780:
            imgWidth = 690;
            break;
        case screenWidth < 780:
            imgWidth = 510;
            pixelDensity = 1;
            break;
        default:
            imgWidth = 960;
    }

    return {
        imgWidth,
        pixelDensity,
        aspectRatio
    };
};

const assetToSrc = (asset, metaImage) => {
    let assetId = asset.split("-")[1];
    let dimension = asset.split("-")[2];
    let extension = asset.split("-")[3];

    if(typeof assetId !== 'undefined' && assetId.length) {
        return metaImage.root + assetId + "-" + dimension + "." + extension + metaImage.params;
    } else {
        return "";
    }
};

const parseAsset = ({asset}) => {
    if(typeof asset !== 'undefined' && typeof asset._ref !== 'undefined') {
        return asset._ref;
    } else {
        return null;
    }
};



export {parceLang, parceDate, genMetaImage, parseAsset, assetToSrc};