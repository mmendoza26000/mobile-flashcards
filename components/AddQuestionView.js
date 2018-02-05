import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import AppBar from './AppBar';
import Button from './Button';
import { addQuestion } from '../actions';

import { connect } from 'react-redux';

class AddQuestionView extends Component {

    state = {
        question: '',
        answer: ''
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? `New card for ${params.title}` : 'Add Question',
        }
      }

    changeQuestionText = (questionText) => {
        this.setState({
            question: questionText
        })
    }

    changeAnswerText = (answerText) => {
        this.setState({
            answer: answerText
        })
    }


    render(){
        const { question, answer } = this.state;
        const { addQuestion, navigation } = this.props;
        const { title } = navigation.state.params;
        
        return(
            <View behavior='height' style={styles.container}>

                <View style={styles.innerContainer}>
                    <TextInput
                        placeholder='Type the question (required)'
                        style={styles.input}
                        value={question}
                        onChangeText={this.changeQuestionText}
                    />
                    <TextInput
                        placeholder='Type the answer (required)'
                        style={styles.input}
                        value={answer}
                        onChangeText={this.changeAnswerText}
                    />
                </View>


                    <Button 
                        disabled={ !(answer.length>0 && question.length>0) }
                        label='Submit' 
                        textColor='white' 
                        bgColor='black' 
                        onPress={() => {
                            addQuestion(title, this.state);
                            navigation.goBack();
                        }}
                        />

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20
    },
    innerContainer: {
        justifyContent: 'flex-start',
        alignItems: 'stretch'
    },
    text: {
        fontSize: 35,
        fontWeight: 'bold'
    },
    input: {
        width: 250,
        height: 44,
        borderWidth: 1,
        margin: 20,
        borderWidth: 1,
        borderRadius: 8
    }

})


function mapStateToProps(state){
    return { }
}

function mapDispatchToProps(dispatch){
    return {
        addQuestion: (title, newQuestion) => {dispatch(addQuestion(title, newQuestion))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddQuestionView);