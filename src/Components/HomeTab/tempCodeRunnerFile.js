<View style={localStyles.parentBOA}>
            <Image source={images.BankAmerica} style={localStyles.AmericaPng} />
            <View style={localStyles.forIcon}>
              <View style={localStyles.BOATxt}>
                <CText type={'S16'}>{strings.BOA}</CText>
                <CText color={colors.tabColor} type={'M12'}>
                  {strings.BankNum}
                </CText>
              </View>
            </View>
            <Feathers name={'angle-down'} color={colors.tabColor} size={20} />
          </View>