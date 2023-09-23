import '../CSSFiles/registerP.css';

function RegisterPatient(){
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: 'blue', padding: 20 }}>
        <Text style={{ fontSize: 24, color: 'white' }}>HOSPITALx</Text>
      </View>
      <View style={{ backgroundColor: 'lightgray', padding: 10 }}>
        <Text style={{ fontSize: 18 }}>Service</Text>
        <Text style={{ fontSize: 18 }}>Contact</Text>
        <Text style={{ fontSize: 18 }}>About</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: '80%' }}>
          <Text style={{ fontSize: 24 }}>Registration</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginVertical: 5, padding: 10 }}
            placeholder="Patient ID"
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginVertical: 5, padding: 10 }}
            placeholder="Name"
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginVertical: 5, padding: 10 }}
            placeholder="Email ID"
          />
          
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginVertical: 5, padding: 10 }}
            placeholder="Password"
            secureTextEntry
          />
          <TextInput
            style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, marginVertical: 5, padding: 10 }}
            placeholder="Confirm Password"
            secureTextEntry
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'blue',
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              marginTop: 10,
            }}
          >
            <Text style={{ fontSize: 18, color: 'white' }}>Register</Text>
          </TouchableOpacity>
        </View>
        <Text style={{ marginTop: 10 }}>
          Already have an account? <Text style={{ color: 'blue' }}>Login</Text>
        </Text>
      </View>
    </View>
  );
}

export default RegisterPatient

