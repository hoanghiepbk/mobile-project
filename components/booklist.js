var REQUEST_URL = 'https://www.googleapis.com/books/v1/volumes?q=subject:fiction';
var {
    Image,
    StyleSheet,
    Text,
    View,
    Component,
} = React;
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 10
    },
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
    rightContainer: {
        flex: 1
    },
    title: {
        fontSize: 20,
        marginBottom: 8
    },
    author: {
        color: '#656565'
    }
});
class BookList extends Component {
    render() {
        var book = FAKE_BOOK_DATA[0];
        return (
            <View style={styles.container}>
                <Image source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                       style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{book.volumeInfo.title}</Text>
                    <Text style={styles.author}>{book.volumeInfo.authors}</Text>
                </View>
            </View>
        );
    }
}
