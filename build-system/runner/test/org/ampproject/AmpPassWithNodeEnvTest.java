package org.ampproject;


import com.google.common.collect.ImmutableSet;
import com.google.javascript.jscomp.Compiler;
import com.google.javascript.jscomp.CompilerPass;
import com.google.javascript.jscomp.Es6CompilerTestCase;


/**
 * Tests {@link AmpPass}.
 */
public class AmpPassWithNodeEnvTest extends Es6CompilerTestCase {

  ImmutableSet<String> suffixTypes = ImmutableSet.of(
      "dev.fine");

  @Override protected CompilerPass getProcessor(Compiler compiler) {
    return new AmpPass(compiler, suffixTypes, true);
  }

  @Override protected int getNumRepetitions() {
    // This pass only runs once.
    return 1;
  }

  public void testDevFineRemoval() throws Exception {
    test("", "");
  }
}
