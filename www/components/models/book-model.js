class Book {
    constructor(isbn10, isbn13, summary, title, authors, status = 'Checked-in') {
        this.isbn10 = isbn10;
        this.isbn13 = isbn13;
        this.status = status;
        this.summary = summary;
        this.title = title;
        this.authors = Book._parseAuthors(authors);
    }

    static _parseAuthors(authors) {
        let parsedAuthors = [];
        if (angular.isArray(authors) && authors.length > 0) {
            for (var author of authors) {
                if (angular.isString(author.name)) {
                    let firstLastNames = author.name.split(',');
                    parsedAuthors.push({
                        fullName: `${firstLastNames[1]} ${firstLastNames[0]}`,
                        firstName: firstLastNames[1],
                        lastName: firstLastNames[0]
                    })
                }
            }
        }
        return parsedAuthors;
    }

    displayAuthors() {
        let authorString = '';

        for (let author of this.authors) {
            authorString += author.fullName + ', ';
        }

        if (authorString.length > 0)
            authorString = authorString.substring(0, authorString.length - 2);

        return authorString;
    }

    changeStatus() {
        if (this.status === 'Checked-in') {
            this.status = 'Checked-out';
        } else {
            this.status = 'Checked-in';
        }
        console.log(this.status);
    }
}

export default Book;