
import React, {Component} from 'react';
import {StyleSheet, View, Text, Modal, TouchableOpacity, DeviceInfo, ViewPropTypes} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {PropTypes} from 'prop-types'
export default class RNEasyDialog extends Component{
    static propTypes = {
        layoutVal: PropTypes.number,
        content: PropTypes.element,
        interval: PropTypes.number,
        backdropColor: PropTypes.string,
        style: ViewPropTypes.style,
        arrowSize: PropTypes.number
    }
    static defaultProps = {
        layoutVal: 0,
        interval: 5,
        backdropColor: 'rgba(0,0,0,.1)',
        arrowSize: 36
    }
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }
    show() {
        this.setState({
            visible: true
        })
    }
    close() {
        this.setState({
            visible: false
        })
    }
    getContent(data) {
        return <View>
        {data ? data : null}
        </View>
    }
    render(){
        const {onClose, onSelect} = this.props
        return(
            <View>
            <TouchableOpacity
        onPress={() => this.show()}
    >
        {this.props.children}
    </TouchableOpacity>
        <Modal
        transparent={true}
        visible={this.state.visible}
        onRequestClose={() => onClose}
    >
    <TouchableOpacity
        style={[styles.container, {backgroundColor: this.props.backdropColor}]}
        onPress={() => this.close()}
    >
    <MaterialIcons
        name={'arrow-drop-up'}
        size={this.props.arrowSize}
        style={[styles.arrow, {marginTop: this.props.layoutVal ? (this.props.layoutVal + this.props.interval) : this.props.interval}]}
        />
        <View style={[this.props.style,styles.diaLoginContent]}>
        {this.getContent(this.props.content)}
    </View>
        </TouchableOpacity>
        </Modal>
        </View>
    )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop:DeviceInfo.isIphoneX_deptrcated ? 30 : 0
    },
    arrow: {
        color: '#fff',
        padding: 0,
        margin: -15
    },
    diaLoginContent: {
        backgroundColor: '#fff',
        borderRadius: 3,
        paddingTop: 3,
        paddingBottom: 3,
        marginRight: 3,
        padding: 5
    }
})

