import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import * as math from 'mathjs';

function App(): JSX.Element {
  const [val, setVal] = useState<number>(0);
  const [input, setInput] = useState<string>('');

  const handleNumberPress = (value: String) => {
    setInput(prev => prev + value);
  };

  const handleCalculate = () => {
    console.log(input);
    if (input !== undefined || input !== null) {
      try {
        const result = math.evaluate(input);
        console.log({result});
        setVal(result);
      } catch (error) {
        console.log({error});
        setVal(0);
      }
    }
  };

  return (
    <View style={style.container}>
      <View style={style.viewInput}>
        {input !== '' ? <Text style={style.inputVal}>{input}</Text> : <Text />}
        <Text style={style.inputRes}>{val}</Text>
      </View>
      <View style={style.viewBtn}>
        <View style={style.opMain}>
          <TouchableOpacity
            style={style.btnFn}
            onPress={() => {
              setInput('');
              setVal(0);
            }}>
            <Text style={style.btnText}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnFn}
            onPress={() => {
              setInput('');
              setVal(0);
            }}>
            <Text style={style.btnText}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnFn}
            onPress={() => handleNumberPress('(')}>
            <Text style={style.btnText}>{'('}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={style.btnFn}
            onPress={() => handleNumberPress(')')}>
            <Text style={style.btnText}>{')'}</Text>
          </TouchableOpacity>
        </View>
        <View style={style.opRow}>
          <View style={style.numberFlex}>
            <View style={style.viewSpBtn}>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('1')}>
                <Text style={style.btnText}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('2')}>
                <Text style={style.btnText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('3')}>
                <Text style={style.btnText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={style.viewSpBtn}>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('4')}>
                <Text style={style.btnText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('5')}>
                <Text style={style.btnText}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('6')}>
                <Text style={style.btnText}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={style.viewSpBtn}>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('7')}>
                <Text style={style.btnText}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('8')}>
                <Text style={style.btnText}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('9')}>
                <Text style={style.btnText}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={style.viewSpBtn}>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('0')}>
                <Text style={style.btnText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.btnSp}
                onPress={() => handleNumberPress('.')}>
                <Text style={style.btnText}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.btnFn}
                onPress={() => handleNumberPress('-')}>
                <Text style={style.btnText}>-</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.addSpBtn}>
            <View style={style.opEnd}>
              <TouchableOpacity
                style={[style.btnFn, {marginTop: 3}]}
                onPress={() => handleNumberPress('+')}>
                <Text style={style.btnText}>+</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[style.btnFn, {marginTop: 15}]}
                onPress={() => handleNumberPress('*')}>
                <Text style={style.btnText}>*</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[style.btnFn, {marginTop: 15}]}
                onPress={() => handleNumberPress('/')}>
                <Text style={style.btnText}>/</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[style.btnFnLong, {marginTop: 15}]}
                onPress={handleCalculate}>
                <Text style={style.btnText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewInput: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  viewBtn: {
    flex: 2,
    padding: 16,
    justifyContent: 'flex-end',
  },
  viewSpBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 18,
    marginRight: 38,
  },
  btnSp: {
    backgroundColor: 'white',
    height: 62,
    width: 62,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  btnFn: {
    backgroundColor: '#ADE2FF',
    height: 62,
    width: 62,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  btnText: {
    fontSize: 24,
    color: '#109DFF',
    fontWeight: '600',
  },
  btnSpText: {
    fontSize: 24,
    color: '#858585',
    fontWeight: '600',
  },
  btnFnLong: {
    backgroundColor: '#ADE2FF',
    height: 120,
    width: 62,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  btnFnHor: {
    backgroundColor: '#FFFFFF',
    height: 62,
    width: 160,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  addSpBtn: {
    flex: 2,
    alignItems: 'flex-end',
  },
  opEnd: {
    marginVertical: 18,
  },
  numberFlex: {
    flex: 10,
  },
  opRow: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 18,
  },
  opMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mt30: {
    marginTop: 30,
  },
  inputVal: {
    fontSize: 36,
    color: '#003DAF',
    fontWeight: '800',
  },
  inputRes: {
    fontSize: 24,
    color: '#00AD33',
    fontWeight: '800',
  },
});

export default App;
