function story(s_id, s_url, s_duration, s_title, s_desc, s_photo, s_rating, s_author){
    var url = s_url;
    var title = s_title;
    var desc = s_desc;
    var photo = s_photo;
    var rating = s_rating;
    var duration = s_duration;
    var author = s_author;
    var id = s_id;


    function getId() {
        return id;
    }

    function getUrl() {
        return url;
    }

    function getTitle() {
        return title;
    }

    function getDesc() {
        return desc;
    }

    function getPhoto() {
        return photo;
    }

    function getRating() {
        return rating;
    }

    function getDuration() {
        return duration;
    }

    function getAuthor() {
        return author;
    }

    return this;
}

export default story;


