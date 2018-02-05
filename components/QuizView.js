import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

import { connect } from 'react-redux';

class QuizView extends Component {

    state={
        currentQuestion: 0,
        correctAnswers: 0,
        showReport: false,
        showAnswer: false
    }

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state;
        
        return {
          title: params ? `Quiz: ${params.title}` : 'Quiz View',
        }
      }

      onCorrect = () => {
          const maxAnswers = this.props.deckItem.questions.length;
          this.setState( (state) => {
                if( (state.currentQuestion+1)<maxAnswers )  {              
                    return {
                        currentQuestion: state.currentQuestion +1,
                        correctAnswers: state.correctAnswers +1,
                        showAnswer: false
                    }
                } else {
                    return {
                        currentQuestion: 0,
                        correctAnswers: state.correctAnswers +1,
                        showAnswer: false,
                        showReport: true
                    }
                }
            })
    }

    onInCorrect = () => {
        const maxAnswers = this.props.deckItem.questions.length;
        this.setState( (state) => {
              if( (state.currentQuestion+1)<maxAnswers )  {              
                  return {
                      currentQuestion: state.currentQuestion +1,
                      showAnswer: false
                  }
              } else {
                  return {
                      currentQuestion: 0,
                      showAnswer: false,
                      showReport: true
                  }
              }
          })
  }

  onRestartQuiz = () => {
      this.setState({
        currentQuestion: 0,
        correctAnswers: 0,
        showReport: false,
        showAnswer: false
    })
  }

    render(){

        const { deckItem, navigation } = this.props;
        const { currentQuestion, showReport, showAnswer, correctAnswers } = this.state;

        return(
            <View style={styles.container}>
                { !showReport && (<Text style={{paddingTop:10}}>Card: {currentQuestion+1}/{deckItem.questions.length}</Text> )}

                { //Show question
                    !showReport && !showAnswer && (
                        <View style={styles.innerContainer} >
                            <Text>{deckItem.questions[currentQuestion].question}</Text>
                            <Button 
                                label='Answer'
                                textColor='red'
                                bgColor='white'
                                border={false}
                                onPress={() => this.setState({showAnswer: true})}
                            />
                        </View>
                    )
                }
                
                { //Show answer
                    !showReport && showAnswer && (
                        <View style={styles.innerContainer} >
                            <Text>{deckItem.questions[currentQuestion].answer}</Text>
                            <Button 
                                label='Question'
                                textColor='red'
                                bgColor='white'
                                border={false}
                                onPress={() => this.setState({showAnswer: false})}
                            />
                        </View>
                    )
                }

                { !showReport && (
                    <View style={styles.innerContainer}>
                        <Button 
                            label='Correct'
                            textColor='white'
                            bgColor='green'
                            border={false}
                            onPress={this.onCorrect}
                        />
                        <Button 
                            label='Incorrect' 
                            textColor='white' 
                            bgColor='red' 
                            border={false}
                            onPress={this.onInCorrect}
                        />
                    </View>
                )}

                { showReport && (
                    <View style={styles.innerContainer}>
                        <View style={styles.innerContainer}>
                            <Text style={styles.reportText} >You had</Text>
                            <Text style={styles.reportText} >{correctAnswers} correct answers</Text>
                            <Text style={styles.reportText} >out of {deckItem.questions.length} total.</Text>
                        </View>

                        <View style={styles.innerContainer}>
                            <Button 
                                label='Restart Quiz'
                                textColor='black'
                                bgColor='white'
                                onPress={this.onRestartQuiz}
                            />
                            <Button 
                                label='Back to Deck' 
                                textColor='white' 
                                bgColor='black' 
                                onPress={ () => {navigation.goBack()} }
                            />
                        </View>
                    </View>
                    )
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingRight: 20
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reportText: {
        fontSize: 20
    }

})


function mapStateToProps(decks, props){
    const deckName = props.navigation.state.params.deckName;
    return {
        deckItem: decks[deckName]
    }
}

export default connect(mapStateToProps)(QuizView);