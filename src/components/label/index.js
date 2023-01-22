import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'

const Label = ({label,children,style,subLabel,subLabelStyle}) => {
  return (
    <View style={styles.container}>
        <Text style={{ ...style, ...styles.label}}>{label}</Text>
        {children}
        {subLabel ? <Text style={{...styles.subLabel, ...subLabelStyle}}>{subLabel}</Text> : null}
        </View>
  )
}

export default Label