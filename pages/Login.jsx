


<Container>
        <Title>Serratec app</Title>
        <Input
          mx="3"
          placeholder="Seu e-mail"
          w={{
            base: "80%",
            md: "25%",
          }}
          style={{marginTop: 20}}
          onChangeText={setEmail}
          value={email}
          keyboardType="default"
        />
        <Input
          mx="3"
          placeholder="Sua senha"
          w={{
            base: "80%",
            md: "25%",
          }}
          style={{margin: 20}}
          onChangeText={setSenha}
          value={senha}
          type="password"
        />
        <Button
          size="lg"
          variant="outline"
          onPress={() => console.log("clicou aqui")}
        >
          Login
        </Button>
        </Container>