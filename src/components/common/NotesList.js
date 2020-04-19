import React, { Component } from 'react';
import {connect} from 'react-redux';
import {View, FlatList, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import MainBlockStyles from '@/styles';
import RemoveNoteComponent from '@/components/common/RemoveNoteComponent';
import PropTypes from 'prop-types'; 
import { updateActiveNote } from  '@/store/actions';
import {FontAwesome} from '@expo/vector-icons';

const NoteItem = ({item, updateActiveNote}) => {
    const {id, date, note} = item;
    return (
        <View style={
            {
                ...styles.noteStyles,
                ...(id % 2 === 0 && styles.noteStylesPaired)
            }
        }>
            <View style={styles.noteWrap}>
                <View>
                    <Text style={styles.noteTextStyles}>Note: {note}</Text>
                    <Text>Date: {date}</Text>
                </View>
                <View style={MainBlockStyles.flexRow}>
                    <TouchableOpacity
                        onPress={() => updateActiveNote(item)}
                        style={MainBlockStyles.marginRight10}
                    >
                        <FontAwesome size={32} name="edit" style={MainBlockStyles.resetBackground} />
                    </TouchableOpacity>
                    <RemoveNoteComponent id={id} />
                </View>
            </View>
        </View>
    );
}

const Header = ({totalResults}) => {
    return (
        <View style={styles.noteTitle}>
            <Text style={MainBlockStyles.centerText}>Total amount: {totalResults}</Text>
        </View>
    );
}

class NotesList extends Component {

    render () {
        const {updateActiveNote} = this.props;

        return (
            <View>
                <SafeAreaView style={styles.container}>
                    <FlatList
                        data={this.props.notes}
                        renderItem={({ item }) => <NoteItem item={item} updateActiveNote={updateActiveNote} />}
                        keyExtractor={item => String(item.id)}
                        ListHeaderComponent={<Header totalResults={this.props.notes.length} />}
                        extraData={this.props.notes}
                    />
                </SafeAreaView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    noteTitle: {
        width: Dimensions.get('window').width,
        height: 44,
        backgroundColor: '#F26A8D',
        display: 'flex',
        justifyContent: 'center',
    }, 
    noteWrap: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    noteStyles: {
        width: Dimensions.get('window').width,
        backgroundColor: '#CBEEF3',
        display: 'flex',
        justifyContent: 'center',
        padding: 15
    },
    noteTextStyles: {
        marginBottom: 5
    },
    noteStylesPaired: {
        backgroundColor: '#F49CBB'
    },
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

NotesList.propTypes = {
    notes: PropTypes.array,
    item: PropTypes.object,
}

NotesList.propTypes = {
    updateActiveNote: PropTypes.func,
}

Header.propTypes = {
    totalResults: PropTypes.number
}

NoteItem.propTypes = {
    updateActiveNote: PropTypes.func,
    item: PropTypes.object
}

function mapStateToProps (state) {
    return {
        notes: state.notes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateActiveNote: (value) => dispatch(updateActiveNote(value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList);